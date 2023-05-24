import { Component,OnInit } from '@angular/core';
import { Category } from '../category';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category:Category=new Category("","");
  catgeoryId:any;
  constructor(private categoryService:CategoryService,private route:Router){

  }
  ngOnInit(): void {
    
  }
  saveCategory(){
    console.log(this.category)
    this.categoryService.addCategoryService(this.category).subscribe( data=>{
      console.log(data);
      alert("added successfully"),
      this.viewCategory();

    },
    error => console.log(error));
  }
  viewCategory(){
    this.route.navigate(['/viewCatgeory'])
  }
  onSubmit(){
    console.log(this.category);
      this.saveCategory();
  }

}
