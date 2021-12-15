import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  clickedRecipe: Recipe
  constructor() { }

  ngOnInit(): void {
  }

}
