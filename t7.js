// Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.
var array =[1,2,3,4,5,6]
function evenSum(arr)
{
    return arr.reduce((acc,curr)=>{
        //console.log("Before: ",acc,curr);
        if(curr%2 == 0) 
        {
            acc += curr;
        }
        //console.log("After: ",acc,curr);
        return acc;
    },0);
}

console.log("Sum of even numbers: ",evenSum(array));