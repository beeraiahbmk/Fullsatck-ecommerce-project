import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {


  user:User=new User(0,"","","","","","","")
  userId:any;
  constructor(private route:Router,private userService:UserService,private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.userId=this.activatedRoute.snapshot.params['userId'];
    console.log("updatee--",this.userId)
    this.userService.getUserById(this.userId).subscribe(data=>{
      this.user=data;
    })
    
  }
  saveProfile(userId:number,user:User){
    this.userService.saveProfileService(this.userId,user).subscribe(
      data=>{console.log(data),
      alert("Profile Updated Successfully");},
      error=>console.log(error)
      )

  }

  logOut(){
    this.route.navigate(['/welcomePage']);
  }

}
