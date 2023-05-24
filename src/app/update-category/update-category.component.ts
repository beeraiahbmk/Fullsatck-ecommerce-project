import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  category:Category=new Category("","");
  categoryId:any;

  constructor(private categoryService:CategoryService,private route:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.categoryId=this.activatedRoute.snapshot.params['categoryid'];
    console.log("$$$",this.categoryId);

    this.categoryService.getCategoryById(this.categoryId).subscribe(data=>{
      this.category=data;
    })
    
     
  }
  saveupdate(){
    console.log("###",this.categoryId)
    console.log(this.category)
    this.categoryService.updateCategoryService(this.category,this.categoryId).subscribe(data=>{
      console.log(data);
      alert("updated successfully");
     },
     error => console.log(error));

  }

  onSubmit(){
    console.log(this.category);
    this.saveupdate();
  }
}

