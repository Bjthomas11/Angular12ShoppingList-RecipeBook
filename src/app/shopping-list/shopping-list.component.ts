import { Component, EventEmitter, OnInit } from '@angular/core';
import { IngredientsService } from 'src/services/ingredients.service';
import {Ingredient} from "../../models/ingredient"
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredientsChanged = new EventEmitter<Ingredient>();
  ingredients: Ingredient[];


  constructor(private ingService: IngredientsService) { }

  ngOnInit(): void {
    this.listIngredients();
  }

  listIngredients(){
    // this.ingService.getIngredients().subscribe((res) => {
    //   this.ingredients = res;
    // })
    this.ingredients = this.ingService.getIngredients();
    this.ingService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }

  // onIngredientAdded(ingSingle: Ingredient){
  //   this.ingredients.push(ingSingle)
  //   // this.ingredientsChanged.emit(this.ingredients.slice())
  // }

}
