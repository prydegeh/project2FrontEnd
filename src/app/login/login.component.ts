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
  invalidLogin = false;
  customer!: Customer;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.userName, this.password)
    ) {
      window.alert('Successful Login!');   
      this.router.navigate(['viewProducts'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

//   constructor(private router: Router, private loginService: LoginService) { }

//   ngOnInit(): void {
//   }


//   checkLogin() {
//     this.getCustomerByUserName(this.userName);
//   }

//   getCustomerByUserName(userName: string): void {
//     this.loginService.getCustomer(userName)
//       .subscribe(customer => {
//         this.customer = customer;
//         console.log("this.customer in arrow function :" + this.customer.password);
//         if (this.customer.userName === this.userName && this.customer.password === this.password) {
//           window.alert('Successful Login!');
//           this.router.navigate(['viewProducts'])
//           this.invalidLogin = false;
//         } else
//           this.invalidLogin = true;

//       });

// }
}
