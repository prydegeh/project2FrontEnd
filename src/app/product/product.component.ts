import { Component, OnInit } from '@angular/core';
import {Food} from '../food';
import { FOODS } from '../mock-food';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  food = FOODS;
  selectedFood?: Food;

  constructor() { }

  ngOnInit(){
  }
    onSelect(food: Food): void {
    this.selectedFood = food;
  }

}
