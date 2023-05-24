import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment:Payment=new Payment("",0);
  payment1:any=[];
  userId:any;
  cartId:any;
  message:any;


  constructor(private route:Router,private activatedRoute:ActivatedRoute,private paymentService:PaymentService){}

  ngOnInit(): void {
    this.cartId= this.activatedRoute.snapshot.params['cartId'];
    this.userId= this.activatedRoute.snapshot.params['userId'];
  }
  // ngOnInit(): void {
  //   this.cart_id= this.activatedRoute.snapshot.params['cart_id'];
  //   this.user_id= this.activatedRoute.snapshot.params['user_id'];
    
  // }
  generatePayment(){
    console.log("inside generate payment"+this.cartId,this.userId)
    console.log(this.payment);
    this.paymentService.addPaymentService(this.cartId,this.userId,this.payment).subscribe(
      data=>{this.payment1=data,
        alert("Order Succeed,Your order will be delivered soon")},
    );
  }
  // generatePayment(){
  //   console.log("inside generate payment"+this.cart_id,this.user_id)
  //   console.log(this.payment);
  //   console.log(typeof this.payment.amount,typeof this.payment.paymentType);
  //    this.paymentService.addPaymentService(this.cart_id,this.user_id,this.payment).subscribe(
  //     data=>{this.payment1=data,
  //       alert("Order Succeed,Your order will be delivered soon")},
      
  //    );
  // }

  back(){
    this.route.navigate(['/viewProducts',this.userId])

  }

}
