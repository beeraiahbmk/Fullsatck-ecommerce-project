import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  category:Category=new Category("","");

  categories:any=[];

  constructor(private categoryService:CategoryService,private route:Router){}

  ngOnInit(): void {
    this.viewCategory();
  }
  viewCategory()
  {

    this.categoryService.viewCategoryService().subscribe(data=>{
      this.categories=data;
      console.log(this.categories)
    })
  }
  updateCategory(categoryid:number){
    console.log("update**",categoryid)
    this.route.navigate(['/updateCategory',categoryid])

  }
  public addProduct(categoryid:number){
    console.log(categoryid)
    this.route.navigate(['/addProduct',categoryid])


  }

  deleteCategory(categoryid:number){
    console.log("we are in delete");
    this.categoryService.deleteCategoryService(categoryid).subscribe(
      data=>{console.log("succuss"),
      this.viewCategory()},
      error=>console.log("error"));
  }
  
  back(){
    this.route.navigate(['/adminPage'])
    
  }
}
