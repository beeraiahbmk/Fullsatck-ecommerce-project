import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  user:User=new User(0,"","","","","","","");
  users:any=[];
  userId:any;

  constructor(private route:Router,private userService:UserService,private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.getUserDetails();

  }
  getUserDetails(){
    this.userId=this.activatedRoute.snapshot.paramMap.get('userId1')
    console.log("888",this.userId)
      this.userService.getUserById(this.userId).subscribe(data=>
        {this.user=data,
        console.log(data)
      }
      )
  }
  
  // saveProfile(user:User){
  //   this.userService.saveUserProfileService(user,this.userId).subscribe(
  //     data=>{console.log(data),
  //     alert("Profile Updated Successfully");},
  //     error=>console.log(error)
  //     )

  // }
  back(){
    this.route.navigate(['/homePage',this.userId])
  }
  logOut(){
    this.route.navigate(['/homepage',this.userId])

  }
  updateUser(userid:number){
    this.route.navigate(['/updateUser',this.userId])

  }
}
