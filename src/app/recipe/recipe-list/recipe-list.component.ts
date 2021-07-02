import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter <Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'this is a Test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRun3R1TVlD8fhjnahmPc4AC6z0ZxLq93VRiQ&usqp=CAU'),
    new Recipe('A second recipe', 'this is another Test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNi5J6SH_XnaE6pcdrD4YGg66XjyK-y5atQ&usqp=CAU')

  ];

  constructor() { }

  ngOnInit(){
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
