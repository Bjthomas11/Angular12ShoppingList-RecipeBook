import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from 'src/models/recipe';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  apiURL: string = "http://localhost:3000/recipes";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private http: HttpClient) { }
  getRecipes(){
    return this.http.get(`${this.apiURL}`)
  }
}
