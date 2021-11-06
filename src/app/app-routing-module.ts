import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
    {path:'', redirectTo: 'viewProducts', pathMatch: 'full'},
    {path: 'viewProducts', component: ProductListComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})





export class AppRoutingModule{}