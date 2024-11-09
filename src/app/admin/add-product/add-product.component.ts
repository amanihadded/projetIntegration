import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Html5QrcodeScanner } from 'html5-qrcode';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup; // Initialize without non-null assertion
  scanning: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      brandImage: [null, Validators.required],
      barcode: ['', [Validators.pattern(/^[0-9]{10,13}$/)]],
      category: ['', Validators.required],
      alternative: ['', [Validators.minLength(3)]],
      publish: [false]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      console.log('Product Data:', productData);
      // Call the API to submit product data
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.productForm.patchValue({ brandImage: file });
  }

  startScan() {
    this.scanning = true;
    const scanner = new Html5QrcodeScanner(
      "scanner-container",
      { 
        fps: 10, 
        qrbox: { width: 250, height: 250 }
      },
      false
    );
    scanner.render(this.onScanSuccess.bind(this), this.onScanFailure.bind(this));
  }

  onScanSuccess(decodedText: string, decodedResult: any) {
    this.productForm.patchValue({ barcode: decodedText });
    this.scanning = false;
  }

  onScanFailure(error: any) {
    console.warn(`Code scan error: ${error}`);
  }
}
