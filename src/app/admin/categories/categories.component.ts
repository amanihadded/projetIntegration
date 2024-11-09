import { Component } from '@angular/core';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories = [
    { id: 1, name: 'Electronics', description: 'Category for electronic products', image:'../../../assets/Images/car.png'  },
    { id: 2, name: 'Clothing', description: 'Category for clothing items', image: '../../../assets/Images/fashion.png'  },
    { id: 3, name: 'Cars', description: 'Category for cars and automatism', image: '../../../assets/Images/drinks.png' },
    { id: 4, name: 'Clothing', description: 'Category for clothing items', image: '../../../assets/Images/fashion.png'  },

    // Ajoutez plus de catégories si nécessaire
  ];

  
}
