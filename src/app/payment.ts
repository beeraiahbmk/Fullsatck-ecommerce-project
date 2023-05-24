export class Payment {

    paymentType:String;
    amount:number;
   //  paymentDate:Date;
     constructor(paymentType:String,amount:number){
        this.paymentType=paymentType;
        this.amount=amount;
     }
}
