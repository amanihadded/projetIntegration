import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit{
    productForm!: FormGroup; // Initialize without non-null assertion

      constructor(private fb: FormBuilder) {}

       ngOnInit(): void {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      brandImage: [null, Validators.required],
      publish: [false]
    });
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.productForm.patchValue({ brandImage: file });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      console.log('Product Data:', productData);
      // Call the API to submit product data
    }
  }

}
