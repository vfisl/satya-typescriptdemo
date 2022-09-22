var nums = [20, 30, 40, 50, 60, 80];
// console.log(nums.length)
// nums.length=10;
// console.log('classic for loop')
// for(let i=0;i<nums.length;i++)
// {
//     const ele=nums[i]
//     console.log(ele)
// }
// console.log(' for IN')
// for(const i in nums)
// {
//     const ele=nums[i]
//     console.log(ele)
// }
// console.log(' for OF')
// for(const i of nums)
// {
//     console.log(i)
// }
// console.log(' FOREACH')
// var summ=function(index:number,value:number,numm:number[])
// {
//     console.log(index)
//     console.log(index)
//     console.log(numm)
// }
// nums.forEach(summ)
//nums.forEach((value:number)=>console.log(value))
var fruits = ["apple", "jam", "banana", "jackfruit", "nnorange"];
fruits.forEach(function (value) {
    if (!value.search('o'))
        console.log(value);
});
function sumOfNums() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    nums.forEach(function (value) {
        sum += value;
    });
    console.log("Sum ".concat(sum));
}
sumOfNums(80, 50, 70);
sumOfNums(50, 50);
