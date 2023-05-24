import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { User } from '../user';
@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {
  user:User=new User(0,"","","","","","","")

  product:Product=new Product(0,"","",0,0,0)
  productId:any;
  productName:any;
  userId:any;

  constructor(private activatedRoute:ActivatedRoute,private route:Router,private productService:ProductService){}

  ngOnInit(): void {
    this.productName=this.activatedRoute.snapshot.params['searchdata']
    this.showProduct();
    this.userId=this.activatedRoute.snapshot.params['userId'];
  }
  showProduct(){
    console.log("***we are in search product")
    this.productService.getProductByName(this.productName).subscribe(data=>{
      this.product=data;
      console.log(this.product)
      console.log(data);
    },error=>{console.log("errorrrr")}
    
    )
  }

  back(){
   
    this.route.navigate(['/homePage',this.userId])

  }
  addToCart(productId:number){

  }

}
