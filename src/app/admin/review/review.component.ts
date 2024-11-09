import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews = [
    { id: 1, type: 'boycott', brand: 'Brand A', proofUrl: 'http://example.com/proof1', reason: 'Supports oppression', date: new Date().toLocaleDateString() },
    { id: 2, type: 'alternative', brand: 'Brand B', proofUrl: 'http://example.com/proof2', alternativeOf: 'Brand A', date: new Date().toLocaleDateString() },
    // Add more reviews
  ];

  boycottReviews = this.reviews.filter(review => review.type === 'boycott');
  alternativeReviews = this.reviews.filter(review => review.type === 'alternative');

  constructor() {}

  ngOnInit(): void {}
}
