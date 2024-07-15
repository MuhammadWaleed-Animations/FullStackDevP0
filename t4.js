// Write a function to reverse a string?

var str = "reverse me";
function rev(st)
{
    return st.split("").reverse().join("");
}

console.log("Orignal String: ",str," \nReversed String: ",rev(str));