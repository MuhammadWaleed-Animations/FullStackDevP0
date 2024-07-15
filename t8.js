// Write a function to check if a number is even or odd.
function evenOdd(val)
{
    if(val%2 == 0)
    {
        console.log(val," is Even");
        return "even";
    }
    console.log(val," is Odd");  
    return "odd";  
}

console.log ("The number 5678938 is ",evenOdd(5678938));