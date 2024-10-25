// scan.component.ts
import { Component } from '@angular/core';
export interface ProductInfo {
  brandImage: string;
  name: string;
  whyBoycott: string;
  alternative: string;
}

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent {
  public productInfoVisible: boolean = false;
  public errorVisible: boolean = false;

  // Remplacez ces valeurs par les valeurs réelles ou les données récupérées
  public productName: string = 'Product Name';
  public productImage: string = '../../../assets/manif-soutien-palestine-scaled.jpg'; // Chemin de l'image du produit
  public productReason: string = 'Reason for boycotting this product.';
  public productAlternative: string = 'Suggest an alternative product.';

  showProductInfo() {
    this.productInfoVisible = true;
    // Si vous souhaitez également afficher un message d'erreur, vous pouvez le faire ici
    // this.errorVisible = true; // Décommenter si nécessaire
  }
}
