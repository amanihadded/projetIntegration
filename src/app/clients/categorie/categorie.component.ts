import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faSearch, faShare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  faArrowLeft = faArrowLeft;
  faSearch = faSearch;
  faShare = faShare;

  showShareContainer = false;

  sectors = [
    { label: 'Car', image: '../../../assets/Images/car.png' },
    { label: 'Clothing', image: '../../../assets/Images/fashion.png' },
    { label: 'Coffee', image: '../../../assets/Images/cup.png' },
    { label: 'Cosmetics', image: '../../../assets/Images/make-up.png' },
    { label: 'Drinks', image: '../../../assets/Images/drinks.png' },
    { label: 'Energy', image: '../../../assets/Images/bolt.png' },
    { label: 'Entertainment', image: '../../../assets/Images/canopy.png' },
    { label: 'Finance', image: '../../../assets/Images/loan.png' },
    { label: 'Household', image: '../../../assets/Images/home-appliance.png' },
    { label: 'Luxury', image: '../../../assets/Images/shopping-bag.png' },
    { label: 'Manufacturer', image: '../../../assets/Images/business-idea.png' },
    { label: 'Politics', image: '../../../assets/Images/conference.png' },
    { label: 'Supermarket', image: '../../../assets/Images/grocery-cart.png' },
    { label: 'Technology', image: '../../../assets/Images/ai.png' }
  ];

  constructor(private router: Router) {}

  toggleShareContainer() {
    this.showShareContainer = !this.showShareContainer;
  }

  navigateBack() {
    this.router.navigate(['..']);
  }

  goToCategory(label: string) {
    this.router.navigate([`/categorie/${label.toLowerCase()}`]);
  }
}
