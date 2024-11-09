import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products = [
      { id: 1, name: 'Coca Cola', barcode: '9900663582', category: 'Drinks', info: 'Coca-Cola: Coca-Cola has faced boycott calls...', alternative: 'Alternative 1' },
      { id: 2, name: 'Chanel', barcode: '9900663582', category: 'Luxury', info: 'Chanel: While Chanel itself is not typically...', alternative: 'Doesnt exist' },
      { id: 3, name: 'Jaguar', barcode: '9900663582', category: 'Car', info: 'Jaguar: Jaguar, along with other automotive...', alternative: 'Alternative 2' },
      { id: 4, name: 'KFC', barcode: '9900663582', category: 'Grocery', info: 'KFC: KFC, as part of Yum! Brands...', alternative: 'Alternative 3' },
      { id: 5, name: 'ZARA', barcode: '9900663582', category: 'Fashion', info: 'Zara: Zara, owned by Inditex...', alternative: 'Doesnt exist' },
    ];
    
    isEditing = false;
    currentProduct: any = null;
    showFullDescription: { [key: number]: boolean } = {};
  
    constructor() { }
  
    ngOnInit(): void {}
  
    handleEditClick(product: any): void {
      this.isEditing = true;
      this.currentProduct = product;
    }
  
    handleDeleteClick(productId: number): void {
      this.products = this.products.filter(product => product.id !== productId);
    }
  
    closeEditForm(): void {
      this.isEditing = false;
      this.currentProduct = null;
    }
  
    toggleDescription(id: number): void {
      this.showFullDescription[id] = !this.showFullDescription[id];
    }
}
