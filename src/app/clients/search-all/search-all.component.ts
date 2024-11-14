import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faSearch, faShare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram,  } from '@fortawesome/free-brands-svg-icons';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ImageProductService } from '../../services/image-product.service';



@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.css']
})
export class SearchAllComponent {
  faArrowLeft = faArrowLeft;
  faSearch = faSearch;
  faShare = faShare;
    faFacebook = faFacebook;
    faInstagram = faInstagram;
    selectedImage: string | null = null;
    searchTerm: string = '';
    currentPage = 1;
    showShareContainer = false;
    brandsPerPage = 6;
    products: Product[] = [];
    imageMap: Map<number, string> = new Map<number, string>();
    productsPerPage: number = 6;
    filteredProduct: Product[] = this.products;

  

  constructor(private router: Router,private productService: ProductService,
    private route: ActivatedRoute,
    private imageProductService: ImageProductService) {}

    ngOnInit(): void {
      this.productService.getAllProducts().subscribe(
        (data) => {
          this.products = data;
          this.filteredProduct=this.products;
         
          this.products.forEach(product => {
            this.imageProductService.getImageByProductId(product.id).subscribe(
              (response: any) => {
                this.imageMap.set(product.id, response);
              },
              (error) => {
                console.error('Failed to retrieve image for product', product.id, ':', error);
              }
            )
          })
        });
    }

    searchProduct() {
      if (this.searchTerm && this.searchTerm.trim() !== '') {
        // Utiliser 'includes' pour permettre la recherche partielle sans se soucier des majuscules/minuscules
        const foundCategories = this.products.filter(category =>
          category.name.toLowerCase().includes(this.searchTerm.toLowerCase().trim()) // Recherche partielle sans distinction de casse
        );
    
        if (foundCategories.length > 0) {
          this.filteredProduct = foundCategories;
          console.log("Produit trouvé :", foundCategories);
        } else {
          this.filteredProduct = []; // Aucun produit trouvé
          console.log("Aucun produit trouvé pour le terme :", this.searchTerm);
        }
      } else {
        this.filteredProduct = this.products; // Affiche tous les produits si aucun terme n'est recherché
        console.log("Affichage de tous les produits.");
      }
    
      console.log("Produits filtrés :", this.filteredProduct);
    }


    getImageUrl(image: any): string {
      return 'data:' + image.type + ';base64,' + image.picByte;
    }
  
    get currentProducts() {
      const indexOfLastProduct = this.currentPage * this.productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - this.productsPerPage;
      return this.products.slice(indexOfFirstProduct, indexOfLastProduct);
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
  
    goBack() {
      this.router.navigate(['/categorie']);
    }
  
    trackByProductName(index: number, product: Product): string {
      return product.name;
    }
}
