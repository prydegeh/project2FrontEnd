import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registerCustomer.component.html',
  styleUrls: ['./registerCustomer.component.css']
})
export class RegisterCustomer implements OnInit {

  customer: Customer = new Customer();
  submitted = false;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

    newCustomer(): void {
      this.submitted = false;
      this.customer = new Customer();
    }
  
    save() {
      this.userService.registerCustomer(this.customer)
        .subscribe(data => console.log(data), error => console.log(error));
      this.customer = new Customer();
      this.gotoList();
    }
  
    onSubmit() {
      this.submitted = true;
      this.save();    
    }
  
    gotoList() {
      this.router.navigate(['/customers']);
    }
  }




  
