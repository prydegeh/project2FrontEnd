import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers : Customer [] = [];

  constructor(public customerService:UserService) { }

  ngOnInit(): void {
    this.getAllCustomers();
    console.log("I'm inside OnInit of Account Component");
  }
  getAllCustomers(): void {
    this.customerService.getAllCustomers()
    .subscribe(customers => this.customers = customers);
  }

}
