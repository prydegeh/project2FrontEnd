//import { Deserializable } from "./deserializable.model";
import { ListItem } from "./list-item";

export interface Product {
    id: number;
    productName: string;
    unitPrice: number;
    listItems: Set<ListItem>;
}
