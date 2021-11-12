//import { Deserializable } from "./deserializable.model";
import {BagService}from "../bag.service"

export class Product {
    id!: number;
    productName!: string;
    restaurantName!: string;
    unitPrice!: number;
    img_url!: string;
}
