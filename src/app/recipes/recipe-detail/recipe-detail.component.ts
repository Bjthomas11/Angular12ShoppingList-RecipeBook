import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe';
import { RecipesService } from 'src/services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() singleRecipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  onAddList() {
    this.recipeService.addIngredientsToList(this.singleRecipe.ingredients)
  }


  ngOnInit(): void {
  }

}
