import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url="http://localhost:8082/api/category/update";
  private url1="http://localhost:8082/api/category";

  constructor(private http:HttpClient) { 
  }
  public addCategoryService(category:Category):Observable<Object>
  {
    return this.http.post("http://localhost:8082/api/add/category",category)
  }
  public viewCategoryService():Observable<Category[]>
  {
    return this.http.get<Category[]>("http://localhost:8082/api/category")
  }
  public updateCategoryService(category:Category,id:number):Observable<any>
  {
  return this.http.put(`${this.url}/${id}`,category);
  }

  public deleteCategoryService(id:number):Observable<any>
  {
    console.log("we are in delete service")
  
    return this.http.delete(`http://localhost:8082/api/category/delete/${id}`);
  }
  public getCategoryById(categoryid:number)
  {
    console.log("we are in  getIdByService")
  
    return this.http.get<Category>(`${this.url1}/${categoryid}`);
  }
}
