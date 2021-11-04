import { Component, OnInit } from '@angular/core';
import {Food} from '../food';
import { FOODS } from '../mock-food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  food = FOODS;
  selectedFood?: Food;

  constructor() { }

  ngOnInit(){
  }
    onSelect(food: Food): void {
    this.selectedFood = food;
  }

}
