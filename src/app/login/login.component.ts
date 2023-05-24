import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User(0,"","","","","","","");
  message=""
  userId:any;
  // user1:User=new User("","","","","","","");
  role:any

  constructor(private loginService:UserService,private router:Router){}

  ngOnInit():void{

  }
  userLogin(){
    this.loginService.userLoginService(this.user).subscribe(
      data =>{console.log("Login succes"),

      console.log("after login",data.userId),
      console.log(data)
      this.user=data;
      this.userId=this.user.userId,
      console.log("------",this.userId);
      this.validateRole()},
      error =>{console.log("Login failed"),
      this.message="login failed. enter valid userName and password"}
    )

  }
  back(){
    this.router.navigate(['/welcomepage']);
  }
  validateRole(){
    if(this.user.role=="user")
      this.router.navigate(['/homePage',this.userId]);
      else
      this.router.navigate(['/adminPage', this.userId]);

  }


}
