import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName:any;
  private urlName="http://localhost:8082/api/users/byName"
  private urlSave="http://localhost:8082/api/users/update"
  private url2="http://localhost:8082/api/users"
  constructor(private httpClient:HttpClient) { }
  public userSignUp(user: User): Observable<any> {
    return this.httpClient.post('http://localhost:8082/api/user/register',user);
  }
  public userLoginService(user:User):Observable<any>
  {
    return this.httpClient.post<any>("http://localhost:8082/api/login",user)
  }
  public getUserById(userid:number):Observable<User>
  {

    return this.httpClient.get<User>(`${this.url2}/${userid}`);

  }
  public getUserByUserName(user:User):Observable<any>
  {
    this.userName=user.userName;
    console.log(this.userName);
    return this.httpClient.get<any>(`${this.urlName}/${this.userName}`);
  }
  saveProfileService(userId:number,user:User):Observable<any>
  {
    console.log("***",userId);
    console.log(user);
    return this.httpClient.put<any>(`${this.urlSave}/${userId}`,user)
  }
  saveUserProfileService(userId:number,user:User):Observable<any>
  {
    console.log("saveprofile",userId);
    console.log(user);
    return this.httpClient.put<any>(`${this.urlSave}/${userId}`,user)
  }
  viewUserService():Observable<User[]>
  {
    return this.httpClient.get<User[]>("http://localhost:8082/api/users")
  }

}
