

// function greet()
// {
//     console.log('greet day');
// }


var check=function(username){console.log(`hello ${username}`);}
check('sadik');


var sayhelloo=function(username:string){return (`hello ${username}`)}
var result=sayhelloo('sadik')
console.log(sayhelloo('sadik'))
var checkage=function(age:number){if(age>18) return 'eligible for voting'; else return 'not eligible'}
console.log(checkage(15))
var calculate=function(num1:number, num2:number){return `product of ${num1} and ${num2} is ${num1*num2}`;}
var result2=calculate(5,5);
console.log(result2)
function show(fun:Function){
    console.log('inside java')
            fun('sadik')
    
}
show(()=>console.log('java is good'));
show((uname:string)=>console.log(`hello  ${uname}` ));
