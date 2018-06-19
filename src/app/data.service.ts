import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";

import { Observable, Subscription }  from "rxjs";
import {map} from "rxjs/operators";

import Product from './models/Product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const links = {
  getProducts: "data/getProducts.php",
  getProductById: "data/getProductById.php"
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  // Gets all Products from DB
  getProducts(category: string): Observable<Product[]> {
    const params = new HttpParams()
      .set("category", category);

    return this.http.get(links.getProducts, {params}).pipe(
        map(res => res['payload'])
    );
  };

  getItemById(id: number): Observable<Product> {
    const params = new HttpParams().set("id", id.toString());

    return this.http.get(links.getProductById, {params}).pipe(
      map(res => res["payload"])
    );
  };
}
