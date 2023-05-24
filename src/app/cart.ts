export class Cart {

cartId:number;
cartProductName:String;
quantity:number;
total_cost:number;



  constructor(cartId:number,cartProductName:String,quantity:number,total_cost:number) { 
    this.cartId=cartId;
    this.cartProductName=cartProductName;
    this.quantity=quantity;
    this.total_cost= total_cost;
  }
}
