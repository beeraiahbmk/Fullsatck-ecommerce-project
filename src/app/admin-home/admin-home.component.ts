import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  user:User=new User(0,"","","","","","","")
  userId:any;

  constructor(private route:Router){

  }
  ngOnInit(): void {
  }
  addCategory(){
    this.route.navigate(['/addCatgeory'])
  }
  logOut(){
    this.route.navigate(['/welcomepage'])

  }
  viewUser(){
    this.route.navigate(['/viewUsers'])
  }
  allProducts(){
    this.route.navigate(['/allProducts'])
  }
  viewCategory(){
    console.log("view category method");
    this.route.navigate(['/viewCategory'])
  }

}
