
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  apiURL: string = "http://localhost:3000/ingredients";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  getIngredients(){
    return this.http.get(`${this.apiURL}`)
  }

}
