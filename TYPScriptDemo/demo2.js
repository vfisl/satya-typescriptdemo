// function greet()
// {
//     console.log('greet day');
// }
var check = function (username) { console.log("hello ".concat(username)); };
check('sadik');
var sayhelloo = function (username) { return ("hello ".concat(username)); };
var result = sayhelloo('sadik');
console.log(sayhelloo('sadik'));
var checkage = function (age) { if (age > 18)
    return 'eligible for voting';
else
    return 'not eligible'; };
console.log(checkage(15));
var calculate = function (num1, num2) { return "product of ".concat(num1, " and ").concat(num2, " is ").concat(num1 * num2); };
var result2 = calculate(5, 5);
console.log(result2);
function show(fun) {
    console.log('inside java');
    fun('sadik');
}
show(function () { return console.log('java is good'); });
show(function (uname) { return console.log("hello  ".concat(uname)); });
