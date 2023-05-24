import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { User } from '../user';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  user:User=new User(0,"","","","","","","")
  product:Product=new Product(0,"","",0,0,0)
  productId:any;
  products:any=[];
  userId:any;
  constructor(private route:Router,private activatedRoute:ActivatedRoute,private productService:ProductService){}

  ngOnInit(): void {
    this.allProducts();
  
  }
  allProducts(){
    this.productService.viewProductService().subscribe(data=>{
      this.products=data;
      console.log(this.products)
    })

  }
  back(){
    this.route.navigate(['/adminPage'])
  }

}
