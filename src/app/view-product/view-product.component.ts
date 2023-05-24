import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  product:Product=new Product(0,"","",0,0,0)
  cart:Cart=new Cart(0,"",0,0);
  userId:any;
  productId:any;
  products:any=[];
  constructor(private route:Router,private activatedRoute:ActivatedRoute,private productService:ProductService,private cartService:CartService){}

  ngOnInit(): void {
    this.userId=this.activatedRoute.snapshot.params['userId'];
    console.log("9999",this.userId)
    this.viewProducts();
  }
  // ngOnInit(): void {
  //   this.user_id=this.activatedRoute.snapshot.params['user_id'];
  //   this.getItemListForUser();

  // }
  // getItemListForUser(){
  //   this.itemService.getItemListService().subscribe(
  //     data=>{this.items=data}
  //   );
  viewProducts(){
    this.productService.viewProductService().subscribe(data=>{
      this.products=data;
      console.log(data);
      console.log(this.products)
    })

  }
  back(){
    this.route.navigate(['/homePage',this.userId])
  }
  addToCart(productid:number){

    console.log("add to cart",productid,this.userId);
    this.cartService.addCartProductService(productid,this.userId,this.cart).subscribe(
            data=>{console.log(data),
   
    this.route.navigate(['/cartForUser',productid,this.userId])
            });


  }
  // addToCart(item_id:number){
  //   console.log("add to cart"+item_id,this.user_id);
  //     this.cartService.addCartItemService(item_id,this.user_id,this.cart).subscribe(
  //       data=>{console.log(data),
      
  //    this.route.navigate(['cartListForUserComponent',item_id,this.user_id])
  //        } );
  // }


}
