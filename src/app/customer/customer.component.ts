import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers!: Observable<Customer[]>;

  constructor(private UserService: UserService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.customers = this.UserService.getAllCustomers();
  }

  deleteEmployee(id: number) {
    this.UserService.deleteCustomer(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  customerDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateCustomer(id: number){
    this.router.navigate(['update', id]);
  }

}
