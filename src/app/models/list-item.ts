import { BillingStatement } from "./billing-statement";
import { Product } from "./product";

export interface ListItem {
    id: Number;
    billingStatement: BillingStatement;
    product: Product; 
    quantity: Number;
    extendedPrice: Number;
    
}
