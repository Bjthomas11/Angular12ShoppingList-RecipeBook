import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/services/recipes.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  allRecipes: any = [];


  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.listRecipes();
  }

  listRecipes(){
    this.allRecipes = this.recipesService.getRecipes()
  }

}
