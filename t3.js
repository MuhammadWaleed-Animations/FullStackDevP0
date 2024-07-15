// Write a function to check if a string is a palindrome

var str1 = "tacocat"; //Taco Cat
var str2 = "racercar";

function isPalendrome(str)
{
    if(str == str.split("").reverse().join(""))
    {
        console.log(str," is palendrome");
        return true;
    }
    console.log(str," is not palendrome");
    return false;
}

isPalendrome(str1);
isPalendrome(str2);