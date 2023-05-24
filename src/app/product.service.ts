import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url="http://localhost:8082/api/add/product";
  private url2="http://localhost:8082/api/product/byName";

  constructor(private httpClient:HttpClient) {
   }
   public addProductService(product:Product,categoryId:number):Observable<Object>
   {
    console.log(categoryId)

    return this.httpClient.post(`${this.url}/${categoryId}`,product);
   }
   public viewProductService():Observable<Product[]>
  {
    return this.httpClient.get<Product[]>("http://localhost:8082/api/products")
  }
  public getProductByName(productName:String):Observable<any>
  {
    return this.httpClient.get<Product>(`${this.url2}/${productName}`);
  }

}
