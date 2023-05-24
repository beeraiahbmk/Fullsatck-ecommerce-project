import { Category } from "./category";
export class Product {
    productId:number;
    productName:String;
    productDescription:String;
    price:Number;
    discount:Number;
    quantity:Number;
    constructor(productId:number,productName:String,productDescription:String,price:Number,discount:Number,quantity:Number){
        this.productId=productId;
        this.productName=productName;
        this.productDescription=productDescription;
        this.price=price;
        this.discount=discount;
        this.quantity=quantity;
    }


}
