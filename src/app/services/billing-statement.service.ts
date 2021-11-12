import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { BillingStatement } from '../models/billing-statement';
//import { data, map } from 'jquery';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillingStatementService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private baseUrl = 'http://localhost:8100/billingStatements/';

  constructor(private http:HttpClient) {}
  
  private log(message: string) {
    console.log(`billing-statement-service: ${message}`);
  }
  getAllBillingStatements(): Observable<BillingStatement[]> {

    return this.http.get<BillingStatement[]>(this.baseUrl+'/billingStatements').pipe(
      tap(_ => this.log('fetched billing statements')),
      catchError(this.handleError<BillingStatement[]>('getAllBillingStatements', []))
   );
  }
  
  createBillingStatement(billingStatment: Object): Observable<object> {
    return this.http.post(this.baseUrl+'/createBillingStatement', billingStatment).pipe(
      tap(_ => this.log('fetched billing statements')),
      catchError(this.handleError<BillingStatement[]>('createBilingStatement', [])));
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
}
}