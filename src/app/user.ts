export class User {
    userId:number;
    userName: String;
    userLastName: String;
    userEmail: String;
    password: String;
    phoneNumber: String;
    address: String;
    role: String;
    constructor(userId:number,userName:String,userLastName:String,userEmail:String,password:String,phoneNumber:String,address:String,role:String){
        this.userId=userId;
        this.userName=userName;
        this.userLastName=userLastName;
        this.userEmail=userEmail;
        this.password=password;
        this.phoneNumber=phoneNumber;
        this.address=address;
        this.role=role;
    }


}
