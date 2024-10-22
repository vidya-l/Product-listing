import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  stock_count: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[][]> {  // Specify the nested array return type
    return this.http.get<Product[][]>(this.apiUrl);
  }
}
