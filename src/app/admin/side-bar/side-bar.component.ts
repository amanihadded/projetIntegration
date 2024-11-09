import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  productsMenuOpen = false;
  categoriesMenuOpen = false;

  constructor(private router: Router) {}

  toggleProductsMenu(): void {
    this.productsMenuOpen = !this.productsMenuOpen;
  }

  toggleCategoriesMenu(): void {
    this.categoriesMenuOpen = !this.categoriesMenuOpen;
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
