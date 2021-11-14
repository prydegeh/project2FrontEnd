import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id!: number;
  customer!: Customer;

  constructor(private route: ActivatedRoute, private router: Router, private customerService: UserService) { }

  ngOnInit() {
    this.customer = new Customer();

    this.id = this.route.snapshot.params['id'];

    this.customerService.getCustomer(this.id)
        .subscribe((data: Customer) => {
          console.log(data)
          this.customer = data;
        }, (error: any) => console.log(error));
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.id, this.customer)
        .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
    this.customer = new Customer();
    this.gotoList();
  }

  onSubmit() {
    this.updateCustomer();
  }

  gotoList() {
    this.router.navigate(['customers']);
  }

}
