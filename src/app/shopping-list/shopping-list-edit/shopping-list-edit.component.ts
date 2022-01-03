import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/models/ingredient';
import { IngredientsService } from 'src/services/ingredients.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef: ElementRef;
 @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private ingService: IngredientsService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingAmount = this.amountInputRef.nativeElement.value
    const ingName = this.nameInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmount)
    this.ingService.addIngredient(newIngredient)
  }

}
