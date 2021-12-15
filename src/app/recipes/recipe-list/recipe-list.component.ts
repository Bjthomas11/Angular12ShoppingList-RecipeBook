import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipesService } from 'src/services/recipes.service';
import {Recipe} from "../../../models/recipe"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  allRecipes: any = [];

  onRecipeSelected(singleRecipe: Recipe){
    this.recipeWasSelected.emit(singleRecipe)
  }

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.listRecipes();
  }

  listRecipes(){
    this.recipesService.getRecipes().subscribe((res) => {
      this.allRecipes = res;
    })
  }

}
