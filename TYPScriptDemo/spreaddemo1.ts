var nums=[10,20,40,50]
var num1=[60,70,80,90]
//spread the array
///create a new array by spreading the values
var tensarr=[...nums,...num1,100]
console.log(`${tensarr}`);
var EMP1={name:'Jo',department:'Admin'}
var address={city:'Ban',state:'Kar'}
var details={

    ...EMP1,
    ...address,
    mbile:56514354,
    allowance:tensarr
}
console.log(details);