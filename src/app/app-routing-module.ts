import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CustomerComponent } from "./customer/customer.component";
import { BillingStatementComponent } from "./billing-statement/billing-statement.component";

const routes: Routes = [
    {path:'', redirectTo: '', pathMatch: 'full'},
    {path: 'viewProducts', component: ProductListComponent},
    {path:"customers",component:CustomerComponent},
    {path:"billingStatement",component:BillingStatementComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})





export class AppRoutingModule{}