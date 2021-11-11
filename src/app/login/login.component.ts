import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LoginService } from '../login.service';
import { Customer } from '../models/customer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = ''
  password = ''
  invalidLogin = false;
  customer!: Customer;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['viewProducts'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

//   constructor(private router: Router, private loginService: LoginService) { }

//   ngOnInit(): void {
//   }


//   checkLogin() {
//     this.getCustomerByEmail(this.username);
//   }

//   getCustomerByEmail(email: string): void {
//     this.loginService.getCustomer(email)
//       .subscribe(customer => {
//         this.customer = customer;
//         console.log("this.customer in arrow function :" + this.customer.password);
//         if (this.customer.email === this.username && this.customer.password === this.password) {
//           this.router.navigate(['customers/'+this.username])
//           this.invalidLogin = false;
//         } else
//           this.invalidLogin = true;

//       });

// }
}
