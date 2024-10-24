import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('quoteElement') quoteElement!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.quoteElement) {
      this.quoteElement.nativeElement.classList.add('fadeInUp');
    }
  }

  // Méthode pour naviguer vers d'autres pages
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
