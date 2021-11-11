import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CustomerComponent } from "./customer/customer.component";
import { BillingStatementComponent } from "./billing-statement/billing-statement.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthGaurdService } from "./auth-gaurd.service"; 
import { BagComponent } from "./bag/bag.component";
import { RegisterCustomer } from "./registerCustomer/registerCustomer.component";

const routes: Routes = [
    {path:'', redirectTo: 'login', pathMatch: 'full'},
    {path: 'viewProducts', component: ProductComponent, canActivate:[AuthGaurdService]},
    {path:"customers",component:CustomerComponent, canActivate:[AuthGaurdService]},
    {path:"billingStatement",component:BillingStatementComponent, canActivate:[AuthGaurdService]},
    {path: 'login', component:LoginComponent},
    {path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]},
    { path: 'bag', component: BagComponent, canActivate:[AuthGaurdService]},
    {path: 'register', component:RegisterCustomer}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}