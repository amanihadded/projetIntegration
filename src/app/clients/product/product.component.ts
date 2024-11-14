import { Component, OnInit } from '@angular/core';
import { faSearch, faShare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ImageProductService } from '../../services/image-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  faSearch = faSearch;
  faShare = faShare;
  faArrowLeft = faArrowLeft;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  imageMap: Map<number, string> = new Map<number, string>();

  currentProduct: Product | null = null;
  products: Product[] = [];
  currentPage: number = 1;
  showShareContainer = false;
  productsPerPage: number = 6;

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    private imageProductService: ImageProductService
  ) {}

  ngOnInit(): void {
    // Fetch all products first
    this.productService.getAllProducts().subscribe(
      (products) => {
        this.products = products;

        // Now handle the route parameter and assign the correct product
        this.route.paramMap.subscribe(params => {
            const formationKey = params.get('id');
            console.log('Formation key from route:', formationKey);
        
            if (formationKey) {
                const formationId = Number(formationKey);
                if (!isNaN(formationId)) {
                    this.currentProduct = this.products.find(f => f.id === formationId) || null;
                }
            }
        });
       
        // Retrieve images for each product
        this.products.forEach(product => {
          this.imageProductService.getImageByProductId(product.id).subscribe(
            (response: any) => {
              this.imageMap.set(product.id, response);
            },
            (error) => {
              console.error('Failed to retrieve image for product', product.id, ':', error);
            }
          );
        });
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }

  // Get image URL from the base64 string
  getImageUrl(image: any): string {
    return 'data:' + image.type + ';base64,' + image.picByte;
  }

  // Returns the current products for pagination
  get currentProducts() {
    const indexOfLastProduct = this.currentPage * this.productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - this.productsPerPage;
    return this.products.slice(indexOfFirstProduct, indexOfLastProduct);
  }

  // Get page numbers for pagination
  get pageNumbers() {
    return Array.from({ length: Math.ceil(this.products.length / this.productsPerPage) }, (_, i) => i + 1);
  }

  // Paginate to the selected page
  paginate(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  selectedProduct!: Product;

  // Toggle share container visibility
  toggleShareContainer(product: Product) {
    this.showShareContainer = !this.showShareContainer;
    this.selectedProduct = product;
  }

  // Close share container
  closeDelete() {
    this.showShareContainer = !this.showShareContainer;
  }

  // Handle product share
  handleShare() {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('Lien copié dans le presse-papiers !');
    }).catch(err => {
      console.error('Erreur lors de la copie : ', err);
      alert('Échec de la copie du lien.');
    });
  }

  // Toggle flip effect for the product alternative
  handleAlternative(product: Product): void {
    const productItem = document.getElementById(`product-${product.name}`);
    if (productItem) {
      productItem.classList.toggle('flip');
    }
  }

  // Go back to the previous page
  goBack() {
    this.router.navigate(['/categorie']);
  }

  // Track products by name for performance optimization
  trackByProductName(index: number, product: Product): string {
    return product.name;
  }
}
