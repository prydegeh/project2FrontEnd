import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '../models/customer';
@Component({
  selector: 'app-registerCustomer',
  templateUrl: './registerCustomer.component.html',
  styleUrls: ['./registerCustomer.component.css']
})
export class RegisterCustomer implements OnInit {

  firstname= ''
  lastname= ''
  username=''
  password= ''
  

  registerForm!: FormGroup;
  invalidRegister = false;
  customer!: Customer;

  form: any = { };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private router: Router,
    public registerservice: RegisterService) { 
      
    }

  ngOnInit() {
  }
    onSubmit(): void {
      this.registerservice.registerCustomer(this.customer).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.router.navigate(['login'])
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
  }
  }
