import { Component } from '@angular/core';

@Component({
  selector: 'app-something-missing',
  templateUrl: './something-missing.component.html',
  styleUrls: ['./something-missing.component.css']
})
export class SomethingMissingComponent {
  logoImage = '../../assets/images/logo.png';
  backgroundImage = '../../assets/manif-soutien-palestine-scaled.jpg';
  selectedOption = 'Boycott';
  isSubmitted = false;
  urlError = '';

  formData = {
    brandName: '',
    proofURL: '',
    reason: '',
    alternativeOf: ''
  };

  onSubmit() {
    if (this.validateURL(this.formData.proofURL)) {
      this.isSubmitted = true;
      this.urlError = '';
    } else {
      this.urlError = 'Please enter a valid URL.';
    }
  }

  validateURL(url: string) {
    const pattern = new RegExp('^(https?:\\/\\/)?'+
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+
      '((\\d{1,3}\\.){3}\\d{1,3}))'+
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
      '(\\?[;&a-z\\d%_.~+=-]*)?'+
      '(\\#[-a-z\\d_]*)?$','i');
    return !!pattern.test(url);
  }

  closeModal() {
    this.isSubmitted = false;
  }
}
