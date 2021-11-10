import { Component, OnInit } from '@angular/core';
import { BillingStatement } from '../models/billing-statement';
import { BillingStatementService } from '../services/billing-statement.service';

@Component({
  selector: 'app-billing-statement',
  templateUrl: './billing-statement.component.html',
  styleUrls: ['./billing-statement.component.css']
})
export class BillingStatementComponent implements OnInit {

  billingStatements : BillingStatement [] = [];

  constructor(public billingStatementService:BillingStatementService) { }

  ngOnInit(): void {
    this.getAllBillingStatements();
    console.log("I'm inside OnInit of BillingStatement Component");
  }
  getAllBillingStatements(): void {
    this.billingStatementService.getAllBillingStatements()
    .subscribe(billingStatements => this.billingStatements = billingStatements);
  }

}
