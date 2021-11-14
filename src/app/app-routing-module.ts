import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { CustomerComponent } from "./customer/customer.component";
import { BillingStatementComponent } from "./billing-statement/billing-statement.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthGaurdService } from "./auth-gaurd.service"; 
import { BagComponent } from "./bag/bag.component";
import { RegisterCustomer } from "./registerCustomer/registerCustomer.component";
import { CreateProductComponent } from "./create-product/create-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { UpdateProductComponent } from "./update-product/update-product.component";
import { UpdateCustomerComponent } from "./update-customer/update-customer/update-customer.component";
const routes: Routes = [
    {path:'', redirectTo: 'login', pathMatch: 'full'},
    {path: 'viewProducts', component: ProductComponent, canActivate:[AuthGaurdService]},
    {path:"customers",component:CustomerComponent, canActivate:[AuthGaurdService]},
    {path:"billingStatement",component:BillingStatementComponent, canActivate:[AuthGaurdService]},
    {path: 'login', component:LoginComponent},
    {path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]},
    {path: 'bag', component: BagComponent, canActivate:[AuthGaurdService]},
    {path: 'register', component:RegisterCustomer},
    {path:"createProducts",component:CreateProductComponent, canActivate:[AuthGaurdService]},
    {path:"listProducts",component:ProductListComponent, canActivate:[AuthGaurdService]},
    {path:"updateProducts/:id",component:UpdateProductComponent, canActivate:[AuthGaurdService]},
    {path:"updateCustomers/:id",component:UpdateCustomerComponent, canActivate:[AuthGaurdService]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}