//import { Deserializable } from "./deserializable.model";
import { ListItem } from "./list-item";
import {BagService}from "../bag.service"

export interface Product {
    id: number;
    productName: string;
    unitPrice: number;
    listItems: Set<ListItem>;
}
