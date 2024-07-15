// Create an array of strings and print the longest string.

const strs = ["hi","I","am","Waleed","who","are","you"];
function longestString(st)
{
    let max = strs[0]
    for(i of st)
    {
        if(i.length >max.length)
        {
            max = i;
        }
    }
    console.log(max);
}

longestString(strs);
