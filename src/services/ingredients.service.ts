
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Ingredient } from 'src/models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  // apiURL: string = "http://localhost:3000/ingredients";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  ingredientsChanged = new EventEmitter<Ingredient[]>();

   ingreidents: Ingredient[] = [
    new Ingredient("Bread", 2)
  ]

  constructor(private http: HttpClient) { }
  getIngredients(){
    // return this.http.get(`${this.apiURL}`)
    return this.ingreidents.slice()
  }

  addIngredient(ingSingle: Ingredient){
    this.ingreidents.push(ingSingle)
    this.ingredientsChanged.emit(this.ingreidents.slice())
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingreidents.push(...ingredients)
    this.ingredientsChanged.emit(this.ingreidents.slice())
  }

}
