import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Food} from '../food';
import { FOODS } from '../mock-food';
import { BagService } from '../bag.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  food = FOODS;
  selectedFood?: Food;

  constructor(
    private route: ActivatedRoute,
    private bagService: BagService
    ) {}

    addToBag(food: Food) {
      this.bagService.addToBag(food);
      window.alert('Your product has been added to the cart!');
    }

  ngOnInit(){
  }
    onSelect(food: Food): void {
    this.selectedFood = food;
  }

}
