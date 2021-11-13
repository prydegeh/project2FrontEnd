import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LoginService } from '../login.service';
import { Customer } from '../models/customer';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  password = '';
  customer!: Customer;

  constructor(private router: Router,
    private loginservice: LoginService) { }

    ngOnInit(): void {
    }
  

  checkLogin() {
     let customer = this.authenticate(this.userName);
    
  
  }

  authenticate(userName: string): void {
    this.loginservice.getCustomerByUserName(userName)
      .subscribe(customer => {
        this.customer = customer;
        console.log("this.customer in arrow function :" + this.customer.password);
     if (this.customer.userName === this.userName && this.password === this.customer.password) {
      sessionStorage.setItem('username', this.userName)
      return true;
    } else {
      return false;
    }
      });
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}
