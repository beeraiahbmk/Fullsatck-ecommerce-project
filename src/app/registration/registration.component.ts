import { Component,  OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user:User=new User(0,"","","","","","","");
  constructor(private userService:UserService,private router:Router){}
  message=""
  // userId:any;

  ngOnInit(): void {
  }
  UserRegister(){
    this.userService.userSignUp(this.user).subscribe(
    data=>{console.log("registration Success");
    this.router.navigate(['/login'])},
      error =>{console.log("Login Failed"),
    this.message="login failed. try again"});
  }
  back()
  {
    this.router.navigate(['/welcomepage'])
  }

}
