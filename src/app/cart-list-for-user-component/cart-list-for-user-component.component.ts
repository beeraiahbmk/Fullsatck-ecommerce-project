import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart-list-for-user-component',
  templateUrl: './cart-list-for-user-component.component.html',
  styleUrls: ['./cart-list-for-user-component.component.css']
})
export class CartListForUserComponentComponent implements OnInit {

cart:Cart=new Cart(0,"",0,0);
carts:any=[];
cartId:any;
userId:any;
amount:any;

constructor(private route:Router,private cartService:CartService,private activatedRoute:ActivatedRoute){

}
  ngOnInit(): void {
    console.log("inside ng Oninit");
    this.userId= this.activatedRoute.snapshot.params['userId'];
     this.getCart();
    
  }
  getCart(){
    console.log("inside getCart"+this.userId);
    this.cartService.getCartProductByUserIdService(this.userId).subscribe(
      data=>{this.carts=data}
    );
  }
  // ngOnInit(): void {
  //   console.log("inside ng Oninit");
  //  this.user_id= this.activatedRoute.snapshot.params['user_id'];
  //   this.getCart();
  // }
  // getCart(){
  //   console.log("inside getCart"+this.user_id);
  //   this.cartService.getCartItemByUserIdService(this.user_id).subscribe(
  //     data=>{this.carts=data}
  //   );
  // }
  OrderNow(cartId:number){
    this.route.navigate(['/payment',this.userId,cartId])
  }
  back(){
    this.route.navigate(['/homePage',this.userId])
  }
  logOut(){
    this.route.navigate(['/homePage'])
  }

}
