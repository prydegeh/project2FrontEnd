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
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomerComponent } from './customer/customer.component';
import { BillingStatementComponent } from './billing-statement/billing-statement.component';
import { BagComponent } from './bag/bag.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { CreateProductComponent } from './create-product/create-product.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RegisterCustomer,
    CustomerComponent,
    BillingStatementComponent,
    BagComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    CreateProductComponent
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
