import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe';
import { RecipesService } from 'src/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  clickedRecipe: Recipe
  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.recipeSelected.subscribe((rec: Recipe) => {
      this.clickedRecipe = rec
    })
  }

}
