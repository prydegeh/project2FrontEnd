import { Component, Input, OnInit } from '@angular/core';
import { BillingStatement } from '../models/billing-statement';
import { Product } from '../models/product';
import { BillingStatementService } from '../services/billing-statement.service';

@Component({
  selector: 'app-billing-statement',
  templateUrl: './billing-statement.component.html',
  styleUrls: ['./billing-statement.component.css']
})
export class BillingStatementComponent implements OnInit {

  billingStatements : BillingStatement [] = [];
  billingStatement! : BillingStatement;
  @Input() quantity! : number;
  @Input() unitPrice!: number;
  @Input() product!: Product;
  extendedPrice: number = this.unitPrice * this.quantity;

  constructor(public billingStatementService:BillingStatementService) { }

  ngOnInit(): void {
    this.getAllBillingStatements();
    console.log("I'm inside OnInit of BillingStatement Component");
  }
  getAllBillingStatements(): void {
    this.billingStatementService.getAllBillingStatements()
    .subscribe(billingStatements => this.billingStatements = billingStatements);
  }

  createBillingStatement(): void{
      
    this.billingStatement.quantity = this.quantity;
    this.billingStatement.extendedPrice = this.extendedPrice;
    this.billingStatement.product = this.product;
    console.log(this.billingStatement);
    this.billingStatementService.createBillingStatement(this.billingStatement);
    
}


}
