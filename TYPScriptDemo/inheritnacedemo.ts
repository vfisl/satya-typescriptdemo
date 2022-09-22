class Employee{
    constructor(public name:string, public city:string){}
  printDetails=()=>
  {
         console.log(`name ${this.name}`);
         console.log(`city ${this.city}`);

  }
  show=(msg:string)=>
  console.log('happy birth day ',msg);

}





class Manager extends Employee{
    constructor(public name:string ,public city:string,public salary:number){
        super(name,city);
    }
    calcBonus=(amount)=>console.log(`total amount is  ${amount+this.salary}`)
    show= (msg:string) =>console.log('');
}


var empolyee=new Employee('sadik','assam');
var manager=new Manager('Shkesh','Tamilnadu')