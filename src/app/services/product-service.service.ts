import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { Product } from '../models/product';
//import { data, map } from 'jquery';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private baseUrl = 'http://localhost:8100/products/';

  constructor(private http:HttpClient) {}
  
  private log(message: string) {
    console.log(`product-service: ${message}`);
  }
  getAllProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.baseUrl+'products-list').pipe(
      tap(_ => this.log('fetched products')),
      catchError(this.handleError<Product[]>('getAllProducts', []))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

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
}