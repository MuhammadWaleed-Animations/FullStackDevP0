// Create an array of objects and print the object with the highest value.
const objects = [
    { Fname: 'Abu Bakar', Lname : 'Saddique', value: 10 },
    { Fname: 'Ali', Lname : 'Raza', value: 15 },
    { Fname: 'Usman', Lname : 'Umer', value: 5 }
    ];
function maxVal(obj)
{
    let max = obj[0];
    for (const i of obj)
    {
        if(i.value > max.value)
        {
            max = i;
        }
    }
    console.log(max);
}

maxVal(objects);