import { Customer } from "./customer";
import { Restaurant } from "./restaurant";

export interface BillingStatement {
    id: Number;
    restaurantName: String;
    productName: String;
    quantity: Number;
    unitPrice: Number;
    extendedPrice: Number;
}
