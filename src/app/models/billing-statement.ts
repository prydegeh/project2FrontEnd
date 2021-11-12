import { Product } from "./product";

export class BillingStatement {
    id!: Number;
    quantity!: Number;
    extendedPrice!: Number;
    product!: Product;
}
