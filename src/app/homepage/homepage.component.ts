import { Component,OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { User } from '../user';
import { ProductService } from '../product.service';
import { Cart } from '../cart';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user:User=new User(0,"","","","","","","");
  userId:any;
  cart:Cart=new Cart(0,"",0,0);
  // userId1:any;
  productName:any;
  products:any=[];
  searchdata:any;
  image:any;
  product:Product=new Product(0,"","",0,0,0)
  constructor(private route:Router,private activatedRoute:ActivatedRoute,private productService:ProductService,private cartService:CartService){
  }

  ngOnInit(): void {
    this.userId=this.activatedRoute.snapshot.params['userId'];
    // this.productName=this.activatedRoute.snapshot.params['productName']
    this.displayAllProducts();
    console.log("+++",this.userId);
    
    // console.log("----product",this.productName)
    
  }
  displayAllProducts(){
    this.productService.viewProductService().subscribe(data=>{
      this.products=data;
      console.log(data);
      console.log(this.products)
    })
  }
  userProfile(){
    console.log("999",this.userId)
    this.route.navigate(['/profile',{userId1:this.userId}])

  }
  viewProducts(){
    this.route.navigate(['/viewProducts',this.userId])

  }
  userDetails(){
    this.route.navigate(['/viewDetails'])
  }
  viewCategory(){
    this.route.navigate(['/viewCategories'])
  }
  logOut(){
    this.route.navigate(['/welcomepage'])
  }
  back(){
    this.route.navigate(['/welcomepage'])
  }
  searchProduct(searchdata:String){
    console.log("we are in search product")
    this.route.navigate(['/getProduct',this.userId,this.searchdata])
    
  }
  addToCart(productid:number){
    console.log("add to cart",productid,this.userId);
    this.cartService.addCartProductService(productid,this.userId,this.cart).subscribe(
            data=>{console.log(data),
   
    this.route.navigate(['/cartForUser',productid,this.userId])
            });
    

  }
  

}
