import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('quoteRef', { static: false }) quoteRef!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    if (this.quoteRef) {
      this.quoteRef.nativeElement.classList.add('fadeInUp');
    }
  }

}
