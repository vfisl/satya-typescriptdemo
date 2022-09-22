var nums=[20,30,40,50,60,80];

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
var fruits=["apple","jam","banana","jackfruit","nnorange"]
fruits.forEach((value:string)=>{
    if(!value.search('o'))
    console.log(value)
})

function sumOfNums(...nums:number[])
{
    let sum=0;
    nums.forEach((value:number)=>{
        sum+=value;
    })
    console.log(`Sum ${sum}`);
}
sumOfNums(80,50,70)
sumOfNums(50,50)