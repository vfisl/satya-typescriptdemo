var uname;
uname = 'priya';
console.log(uname);
uname = 10000;
console.log(uname);
uname = ['a', 'b'];
console.log(uname);
//union
var printData = function (val) {
    if (typeof val == "string")
        console.log("hello ".concat(val));
    else
        console.log("squrae ".concat(val * val));
};
printData(10);
printData("sadik");
