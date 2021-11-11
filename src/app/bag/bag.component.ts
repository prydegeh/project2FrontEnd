import { Component, OnInit } from '@angular/core';
import { BagService } from '../bag.service';
@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  
  items = this.bagService.getItems();

  constructor(public bagService: BagService) { }

  ngOnInit(): void {
  }
  

}
