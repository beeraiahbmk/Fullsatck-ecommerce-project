import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category:Category=new Category("","");
  user:User=new User(0,"","","","","","","")
  userId:any;
  categories:any=[];

  constructor(private route:Router,private categoryService:CategoryService,private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.userId=this.activatedRoute.snapshot.params['userId'];
    this.viewCategory();
    
  }
  viewCategory(){
    this.categoryService.viewCategoryService().subscribe(data=>{
      this.categories=data;
      console.log(this.categories)
    }
    )
  }
  back(){
    this.route.navigate(['/homePage',this.userId])
  }

}
