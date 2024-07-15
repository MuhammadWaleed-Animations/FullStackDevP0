//Write a function to find the factorial of a number?

function fact(num)
{
    if(num<=1)
    {
        return 1;
    }
    return (num*fact(num-1));
}

for(var i= 0;i<5;i++)
{
    console.log("Factorial of ",i," is ",fact(i));
}