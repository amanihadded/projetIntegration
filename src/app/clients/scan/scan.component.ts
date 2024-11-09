import { Component } from '@angular/core';
import { Html5QrcodeScanner } from 'html5-qrcode';

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
  public scanning: boolean = false;

  public productName: string = '';
  public productImage: string = ''; // Image will be updated after scanning
  public productReason: string = '';
  public productAlternative: string = '';

  // Method to start scanning
  startScan() {
    this.scanning = true;  // Show the scanner container
    const scanner = new Html5QrcodeScanner(
      "scanner-container",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 }
      },
      false
    );
    
    // Initiate the scanning process
    scanner.render(this.onScanSuccess.bind(this), this.onScanFailure.bind(this));

  }

  // Handle successful scan
  onScanSuccess(decodedText: string, decodedResult: any) {
    console.log('Scan success:', decodedText);

    // Fetch product info based on decoded barcode (this should be replaced with real data fetching logic)
    this.fetchProductInfo(decodedText);
    
    // Stop scanning after success
    this.scanning = false;
  }

  // Handle scan failure
  onScanFailure(error: any) {
    console.warn(`Scan error: ${error}`);
  }

  // Mock method to simulate fetching product info based on decoded text (barcode)
  fetchProductInfo(barcode: string) {
    // Simulate fetching product data based on the barcode scanned
    if (barcode === "5901234123457") {
      this.productName = "Example Product";
      this.productImage = "assets/example-product.jpg";
      this.productReason = "This product supports Israeli businesses.";
      this.productAlternative = "Try product XYZ instead.";
      this.productInfoVisible = true;
      this.errorVisible = false;
    } else {
      this.productInfoVisible = false;
      this.errorVisible = true;
    }
  }
}
