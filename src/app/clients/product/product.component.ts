import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ImageProductService } from '../../services/image-product.service';
import { faArrowLeft, faSearch, faShare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faSearch = faSearch;
  faShare = faShare;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  imageMap: Map<number, string> = new Map<number, string>();
  showShareContainer = false;
  currentPage: number = 1;
  productsPerPage: number = 6;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private imageProductService: ImageProductService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de la catégorie depuis l'URL
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    if (categoryId) {
      this.productService.getProductsByCategoryId(Number(categoryId)).subscribe(
        (products) => {
          this.products = products;
          this.filteredProducts = products;

          // Charger les images des produits
          this.products.forEach((product) => {
            this.imageProductService.getImageByProductId(product.id).subscribe(
              (response: any) => {
                this.imageMap.set(product.id, response);
              },
              (error) => {
                console.error('Erreur lors du chargement de l\'image du produit', error);
              }
            );
          });
        },
        (error) => {
          console.error('Erreur lors du chargement des produits :', error);
        }
      );
    }
  }

  

  // Pagination
  get currentProducts() {
    const indexOfLastProduct = this.currentPage * this.productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - this.productsPerPage;
    return this.filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }
  get pageNumbers() {
    return Array.from({ length: Math.ceil(this.products.length / this.productsPerPage) }, (_, i) => i + 1);
  }
  paginate(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  selectedProduct!: Product;
  toggleShareContainer(product: Product) {
    this.showShareContainer = !this.showShareContainer;
    this.selectedProduct = product;
  }

  closeDelete() {
    this.showShareContainer = !this.showShareContainer;
  }

  // Retour à la page précédente
  goBack() {
    this.router.navigate(['/categorie']);
  }

  // Obtenir l'URL de l'image en base64
  getImageUrl(image: any): string {
    return 'data:' + image.type + ';base64,' + image.picByte;
  }

  // Gérer le partage du produit
  handleShare() {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('Lien copié dans le presse-papiers !');
    }).catch(err => {
      console.error('Erreur lors de la copie : ', err);
      alert('Échec de la copie du lien.');
    });
  }

  handleAlternative(product: Product): void {
    const productItem = document.getElementById(`product-${product.name}`);
    if (productItem) {
      productItem.classList.toggle('flip');
    }
  }

  

  trackByProductName(index: number, product: Product): string {
    return product.name;
  }
}
