import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  images: string[];
}

export interface Config {
  products: Product[];
}
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private api: string = "data.json";

  constructor(private http: HttpClient) {

   }

   getProducts(): Observable<Config[]> {
      return this.http.get<Config[]>(this.api);
   }
}
