//Write a sync and Async funtion to fetch data from 3 APIs with delays 10000, 5000 and 7000 respectively.

// async function Call3Api(api1)
// {
//     try{
//         let response =  await fetch('https://xkcd.com/info.0.json'); 
//         console.log("response: ",response);
//         if(response.ok)
//         {
//             console.log(response.status);
//             throw new Error('There is error ${response.status}');
//         }
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }

// var Api1 = "https://xkcd.com/info.0.json";
// Call3Api(Api1,2,3);
function randomInt(min,max)
{
    var num = (Math.random() *(max-min +1))+min;
    return num;
    
}
async function getRandomComicAsync() {
    try {

    let response = await fetch(`https://cors-anywhere.herokuapp.com/https://xkcd.com/`+Math.floor(Math.random() *(614))+`/info.0.json`);
    
    if (!response.ok) {
        throw new Error(`API 1's request failed with status ${response.status}`);
    }
    let comicData = await response.json();
    console.log(`Comic Title: ${comicData.title}`);
    
    console.log(`Comic Image: ${comicData.img}`);

    setTimeout(()=>{
        let p = document.getElementById('para');
        p.innerHTML = comicData.title;
    
    
        let i = document.getElementById('comic');
        i.setAttribute("src",comicData.img);
    },10000);



    const response2 = await fetch(`https://cors-anywhere.herokuapp.com/https://xkcd.com/`+Math.floor(Math.random() *(614))+`/info.0.json`);
    
    if (!response2.ok) {
        throw new Error(`API 2's request failed with status ${response2.status}`);
    }
    const comicData2 = await response2.json();
    console.log(`Comic Title: ${comicData2.title}`);
    
    console.log(`Comic Image: ${comicData2.img}`);
    setTimeout(()=>{
        let p = document.getElementById('para2');
        p.innerHTML = comicData2.title;
    
    
        let i = document.getElementById('comic2');
        i.setAttribute("src",comicData2.img);
    },5000);


    const response3 = await fetch(`https://cors-anywhere.herokuapp.com/https://xkcd.com/`+Math.floor(Math.random() *(614))+`/info.0.json`);
    
    if (!response3.ok) {
        throw new Error(`API 3's request failed with status ${response3.status}`);
    }
    const comicData3 = await response3.json();
    console.log(`Comic Title: ${comicData3.title}`);
    
    console.log(`Comic Image: ${comicData3.img}`);
    setTimeout(()=>{
        let p = document.getElementById('para3');
        p.innerHTML = comicData3.title;
    
    
        let i = document.getElementById('comic3');
        i.setAttribute("src",comicData3.img);
    },7000);



    } catch (error) {
    console.error("Error:", error);
    }


}
function Api1()
{
    let p = document.getElementById('Para');
    p.innerHTML = "First Api called";

}
function Api2()
{
    let p = document.getElementById('Para2');
    p.innerHTML = "2nd Api called";

}
function Api3()
{
    let p = document.getElementById('Para3');
    p.innerHTML = "3rd Api called";

}
function get3Api() {
    setTimeout(Api1(),10000);
    setTimeout(Api2(),5000);
    setTimeout(Api3(),7000);
}

getRandomComicAsync();

get3Api();






  