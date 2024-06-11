import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }

  path = "http://localhost:3000/products"

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.path)
  }

  addProduct(data:Product):Observable<Product>{
    return this.http.post<Product>(this.path,data)
  }
}
