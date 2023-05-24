import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) {

  }
  private url="http://localhost:8082/api/cart";
  private url1="http://localhost:8082/api/cart/get"

  public addCartProductService(product_Id:number,user_id:number,cart:Cart):Observable<Object>{
   console.log("In service"+product_Id,user_id);
   return this.http.post<any>(`${this.url}/${product_Id}/${user_id}`,cart)
 }
//  public addCartItemService(item_id:number,user_id:number,cart:Cart):Observable<Object>{
//   console.log("In service"+item_id,user_id);
//   return this.http.post<any>(`${this.url}/${item_id}/${user_id}`,cart)
// }
  public getCartProductByUserIdService(user_id:number):Observable<Cart[]>{
   console.log("inside service get cart item by user_id"+user_id);
  return this.http.get<Cart[]>(`${this.url1}/${user_id}`);
 }
//  public getCartItemByUserIdService(user_id:number):Observable<Cart[]>{
//   console.log("inside service get cart item by user_id"+user_id);
//  return this.http.get<Cart[]>(`${this.url}/${user_id}`);
// }
 public getCartListService():Observable<Cart[]>{
   return this.http.get<Cart[]>("http://localhost:8082/api/cart")
 }
 public deleteCartProductService(cart_id:number):Observable<any>
 {
   return this.http.delete(`${this.url}/${cart_id}`);

 }
 public getCartProductByIdService(cart_id:number):Observable<Cart>
 {
   
   return this.http.get<Cart>(`${this.url}/${cart_id}`);
 }
 public updateCartIProductService(cart_id:number,cart:Cart):Observable<any>
 {
   return this.http.put(`${this.url}/${cart_id}`,cart);
 }
  
}

// @Column(name="cartProductName")
// 	private String cartProductName;
// 	@Column(name="quantity")
// 	private int quantity;
// 	@Column(name="total_cost")
// 	private double total_cost;


