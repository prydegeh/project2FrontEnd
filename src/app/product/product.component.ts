import { Component, OnInit } from '@angular/core';
import { BillingStatementComponent } from '../billing-statement/billing-statement.component';
import { BillingStatement } from '../models/billing-statement';
import { Product } from '../models/product';
import { ProductService } from '../services/product-service.service';

@Component({
  providers: [BillingStatementComponent],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product [] = [];
  billingStatement!: BillingStatement;
  submitted = false;

  constructor(public productService:ProductService,
              private comp: BillingStatementComponent
    ) { }

  ngOnInit(): void {
    this.getAllProducts();
    console.log("I'm inside OnInit of BillingStatement Component");
  }
  getAllProducts(): void {
    this.productService.getAllProducts()
    .subscribe(products => this.products = products);
  }

  public createBillingStatement(): void{
    this.comp.createBillingStatement();
  }

  onSubmit() {
    this.submitted = true;
    this.createBillingStatement();    

}
}
