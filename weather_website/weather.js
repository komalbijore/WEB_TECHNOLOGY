let input=document.querySelector("input")
let search=document.querySelector("button");
let city=document.querySelector("h2");
let temp=document.querySelectorAll("h3")[0];
let climate=document.querySelectorAll("h3")[1];
let output=document.querySelector("#output");
// let apiKey=`5f8758af824727ba3a3899eb9d967046`
// let api="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
// console.log(input,search,city,temp,climate);
// console.log(apiKey,api);



search.addEventListener("click",async()=>{
  
    try{ 
    let apiKey=`5f8758af824727ba3a3899eb9d967046`
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`
    let dataFromInternet=await fetch(api);
    let weatherData=await dataFromInternet.json();
    
    //create elments
      output.innerHTML='';
    let city=document.createElement('h2');
    let  temp=document.createElement('h3');
    let climate=document.createElement('h3');

    //----make city, temp and climate as a child of output div
    output.append(city,temp,climate);
    // city.innerHTML=weatherData.name;
    city.innerHTML=`City Name : ${weatherData.name}`;
    temp.innerHTML=`Temparature : ${Math.floor(weatherData.main.temp-273)} degC`;  //get in kelvin to convert it in Celsius minus 273 so get is cencius
    climate.innerHTML=`climate : ${weatherData.weather[0].main}`;

    console.log(dataFromInternet);
    console.log(weatherData);
    }catch(error){   
        // console.log("error");
        output.innerHTML="Invalid city name";
    }
});
