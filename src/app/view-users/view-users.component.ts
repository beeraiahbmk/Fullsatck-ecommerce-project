import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  user:User=new User(0,"","","","","","","");
  userId:any;
  users:any=[]
  constructor(private route:Router,private userService:UserService){}

  ngOnInit(): void {
    this.viewUsers();
    
  }

  viewUsers(){
    this.userService.viewUserService().subscribe(data=>{
      this.users=data;
      console.log(this.users)
    })
  }
  back(){
    this.route.navigate(['/adminPage'])

  }

}
