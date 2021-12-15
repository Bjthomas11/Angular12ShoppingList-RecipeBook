import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/services/ingredients.service';
import {Ingredient} from "../../models/ingredient"
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: any = [];

  constructor(private ingService: IngredientsService) { }

  ngOnInit(): void {
    this.listIngredients();
  }

  listIngredients(){
    this.ingService.getIngredients().subscribe((res) => {
      this.ingredients = res;
    })
  }

  onIngredientAdded(ing: Ingredient){
    this.ingredients.push(ing)
  }

}
