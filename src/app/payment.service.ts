import { Injectable } from '@angular/core';
import { Payment } from './payment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) {

  }

private url ="http://localhost:8082/api/payment";
public addPaymentService(cart_id:number,user_id:number,payment:Payment):Observable<Object>{
  
  return this.http.post<any>(`${this.url}/${user_id}/${cart_id}`,payment)
}
public getPaymentListService():Observable<Payment[]>{
 
  return this.http.get<Payment[]>("http://localhost:8082/api/payment")
}
public deletePaymentService(paymentId:number):Observable<any>
{
return this.http.delete(`${this.url}/${paymentId}`);

}
public getPaymentByIdService(paymentId:number):Observable<Payment>
{

return this.http.get<Payment>(`${this.url}/${paymentId}`);
}
public updatePaymentService(paymentId:number,payment:Payment):Observable<any>
{
return this.http.put(`${this.url}/${paymentId}`,payment);
}
}
