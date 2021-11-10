import { Customer } from "./customer";
import { Restaurant } from "./restaurant";

export interface BillingStatement {
    id: Number;
    customer: Customer;
    restaurant: Restaurant;
    submitDate: Date;
    subTotal: Number;
    tax: Number;
    total: Number;
}
