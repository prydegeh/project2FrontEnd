import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { RegisterCustomer } from './registerCustomer/registerCustomer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataTablesModule} from 'angular-datatables';
import {AppRoutingModule} from './app-routing-module'
import {MaterialModule} from '../material.module';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomerComponent } from './customer/customer.component';
import { BillingStatementComponent } from './billing-statement/billing-statement.component';
import { BagComponent } from './bag/bag.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RegisterCustomer,
    RestaurantComponent,
    ProductListComponent,
    CustomerComponent,
    BillingStatementComponent,
    BagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTablesModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
