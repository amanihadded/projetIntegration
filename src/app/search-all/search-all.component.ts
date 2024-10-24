// Ajoutez ceci en haut du fichier search-all.component.ts
export interface Brand {
  name: string;
  image: string;
  description: string;
}
import { Component } from '@angular/core';
import { faSearch, faShare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

export interface Brand {  // Définition de l'interface Brand
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
    faSearch = faSearch;
    faShare = faShare;
    faArrowLeft = faArrowLeft;
    faFacebook = faFacebook;
    faInstagram = faInstagram;

    brands: Brand[] = [
        { name: '7up', image: 'assets/images/7up.png', description: 'Description for 7up' },
        { name: 'Acqua Panna', image: 'assets/images/acqua_panna.png', description: 'Description for Acqua Panna' },
        // Ajoutez d'autres marques au besoin
    ];

    currentPage: number = 1;
    showModal: boolean = false;
    selectedBrand: Brand | null = null;
    brandsPerPage: number = 6;

    constructor(private router: Router) {}

    get currentBrands() {
        const indexOfLastBrand = this.currentPage * this.brandsPerPage;
        const indexOfFirstBrand = indexOfLastBrand - this.brandsPerPage;
        return this.brands.slice(indexOfFirstBrand, indexOfLastBrand);
    }

    get pageNumbers() {
        return Array.from({ length: Math.ceil(this.brands.length / this.brandsPerPage) }, (_, i) => i + 1);
    }

    paginate(pageNumber: number) {
        this.currentPage = pageNumber;
    }

    openModal(brand: Brand) {
        this.selectedBrand = brand;
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
        this.selectedBrand = null;
    }

    handleShare() {
        const shareUrl = window.location.href;
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('Lien copié dans le presse-papiers !');
        }).catch(err => {
            console.error('Erreur lors de la copie : ', err);
            alert('Échec de la copie du lien.');
        });
    }

    handleAlternative(brand: Brand) {
        const brandItem = document.getElementById(`brand-${brand.name}`);
        if (brandItem) {
            brandItem.classList.toggle('flip');
        }
    }

    goBack() {
        this.router.navigate(['..']);
    }

    trackByBrandName(index: number, brand: Brand): string {
        return brand.name;
    }
}
