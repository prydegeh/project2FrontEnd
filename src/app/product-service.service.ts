import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable  } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  // private productsUrl: String;

  private baseUrl = 'http://localhost:8100/products/';

  constructor(private http:HttpClient) {}
  getAllProducts(): Observable<any> {

    return this.http.get(`${this.baseUrl}`+'product-list');
  }


  // constructor(private http:HttpClient) { 
  //   this.productsUrl = 'http://localhost:8100/products/';
  // }

  // public getAllProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.productsUrl);
  // }

  // public save(product: Product) {
  //   return this.http.post<Product>(this.productsUrl, product);
  // }
}
