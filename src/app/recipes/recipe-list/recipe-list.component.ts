import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Recipe} from "../../../models/recipe"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("Recipe 1", "Recipe Description", 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg' ),
    new Recipe("Recipe 1", "Recipe Description", 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg' )
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
