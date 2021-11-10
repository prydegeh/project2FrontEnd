import { Injectable } from '@angular/core';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class BagService {
  items: Food[] = [];


  addToBag(food: Food) {
    this.items.push(food);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() { }
}
