import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faSearch, faShare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram,  } from '@fortawesome/free-brands-svg-icons';

interface Brand {
  name: string;
  image: string;
  description: string;
}

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
  
  currentPage = 1;
  showModal = false;
  selectedBrand: Brand | null = null;
  brandsPerPage = 6;

  brands: Brand[] = [
    { name: '7up', image: '../../../assets/Images/ai.png', description: 'Description for 7up' },
    { name: 'Acqua Panna', image: '../../../assets/Images/ai.png', description: 'Description for Acqua Panna' },
    { name: 'Actimel', image: '../../../assets/Images/ai.png', description: 'Description for Actimel' },
    { name: 'Activia', image: '../../../assets/Images/ai.png', description: 'Description for Activia' },
    { name: 'Adidas', image: '../../../assets/Images/ai.png', description: 'Description for Adidas' },
    { name: 'Aerin', image: '../../../assets/Images/ai.png', description: 'Description for Aerin' },
    { name: 'Diet Coke', image: '../../../assets/Images/ai.png', description: 'Description for Diet Coke' },
    { name: 'DKNY', image: '../../../assets/Images/ai.png', description: 'Description for DKNY' },
    // Add more brands as needed
  ];

  constructor(private router: Router) {}

  get currentBrands(): Brand[] {
    const indexOfLastBrand = this.currentPage * this.brandsPerPage;
    const indexOfFirstBrand = indexOfLastBrand - this.brandsPerPage;
    return this.brands.slice(indexOfFirstBrand, indexOfLastBrand);
  }

  get pageNumbers(): number[] {
    return Array.from({ length: Math.ceil(this.brands.length / this.brandsPerPage) }, (_, i) => i + 1);
  }

  paginate(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  openModal(brand: Brand): void {
    this.selectedBrand = brand;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedBrand = null;
  }

  handleShare(): void {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('Link copied to clipboard!');
    });
  }

  handleAlternative(brand: Brand): void {
    const brandItem = document.getElementById(`brand-${brand.name}`);
    if (brandItem) {
      brandItem.classList.toggle('flip');
    }
  }

  goBack() {
    this.router.navigate(['/']);
}
}
