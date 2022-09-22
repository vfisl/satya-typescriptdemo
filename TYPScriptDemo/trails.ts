 export function add(x:number, y:number=10)
 {
     console.log(x+y);
 }
 add(10)
 export let greet=(msg:string)=> {
    console.log(`good morning  ${msg}`);        
 }

 export class Product{
    constructor(public itemname:string,public price:number)
    {

    }
    
printdetails=()=>{
console.log(`itemname :${this.itemname}`);
console.log(`price  :${this.price}`);

}        
 
}
 
