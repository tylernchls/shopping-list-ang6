import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe', 'this is a test', 'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/1474468244/roasted-kabocha-with-maple-syrup-and-ginger-XL-RECIPE1116.jpg?itok=S1k9seN7' ),
    new Recipe('test recipe', 'this is a test', 'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/1474468244/roasted-kabocha-with-maple-syrup-and-ginger-XL-RECIPE1116.jpg?itok=S1k9seN7' )
  ];
  constructor() { }

  ngOnInit() {
  } 

}
