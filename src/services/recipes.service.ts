import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from 'src/models/recipe';
import { Ingredient } from 'src/models/ingredient';
import { IngredientsService } from './ingredients.service';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  apiURL: string = "http://localhost:3000/recipes";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[]= [
    new Recipe(
      "Recipe 1",
    "Lorem ipsum dolor",
    "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg",
    [ new Ingredient("Meat", 1), new Ingredient("Fries", 3)]
    ),
    new Recipe(
      "Recipe 2",
    "Lorem ipsum dolor",
    "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg",
    [ new Ingredient("Meat", 1), new Ingredient("Fries", 3)]
    )
  ]

  constructor(private http: HttpClient, private ingredientService: IngredientsService) { }
  // getRecipes(){
  //   return this.http.get(`${this.apiURL}`)
  // }
  getRecipes(){
    return this.recipes.slice()
  }

  addIngredientsToList(ingredients: Ingredient[]){
this.ingredientService.addIngredients(ingredients)
  }
}
