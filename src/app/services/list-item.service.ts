import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { ListItem } from '../models/list-item';
//import { data, map } from 'jquery';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private baseUrl = 'http://localhost:8100/listItems/';

  constructor(private http:HttpClient) {}
  
  private log(message: string) {
    console.log(`list-item-service: ${message}`);
  }
  getAllListItems(): Observable<ListItem[]> {

    return this.http.get<ListItem[]>(this.baseUrl+'list-item').pipe(
      tap(_ => this.log('fetched list items')),
      catchError(this.handleError<ListItem[]>('getAllProducts', []))
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
}
}