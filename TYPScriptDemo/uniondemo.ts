var uname:any;
uname='priya'
console.log(uname);
uname=10000
console.log(uname);
uname=['a','b']
console.log(uname);
//union
var printData=function(val:string|number)
{
    if(typeof val=="string")
    console.log(`hello ${val}`);
    else console.log(`squrae ${val*val}`);
}
printData(10)
printData("sadik")