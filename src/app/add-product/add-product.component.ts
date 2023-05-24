import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:Product=new Product(0,"","",0,0,0);
  productId:any;
  categoryId:any;
  image:any;

  constructor(private routr:Router,private productService:ProductService,private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.categoryId=this.activatedRoute.snapshot.params['categoryid'];
    
    
  }
  saveProduct(){
    
    console.log("****",this.categoryId)
    console.log(this.product)
    this.productService.addProductService(this.product,this.categoryId).subscribe(data=>{
      console.log(data);
      alert("prodct added succesfully")
    },
    error => console.log(error));
  }
  onSubmit(){
    console.log(this.product);
    this.saveProduct();

  }

}
