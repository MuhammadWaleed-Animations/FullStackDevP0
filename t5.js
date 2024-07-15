// Find the index of an element in an array.

var arr = [1,2,3,4,5]
function find(array,toFind)
{
    return array.findIndex((value,index,temp)=> (value == toFind));
}
console.log("Required index of 4 is ",find(arr,4));