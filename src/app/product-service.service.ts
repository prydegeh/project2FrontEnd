import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl = 'http://localhost:8080/productlist/';

  constructor(private http:HttpClient) { }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'viewProducts');

  }
}
