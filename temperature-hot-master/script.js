const key ='e9787c3b41a2250e8f4042c540183d21';
const site = 'https://api.openweathermap.org/data/2.5/weather';

const  getWeather = cityInput => {
    const url = `${site}?q=${cityInput}&appid=${key}`
    fetch(url)
    .then(Response => Response.json())
    .then(data =>  updateUI(data))
}
const searchBtn = document.getElementById("search");
searchBtn.addEventListener("click",function(){
    const city = document.getElementById("cityInput").value;
    getWeather(city);
})

const updateUI = data =>{
   document.getElementById("city").innerHTML = data.name;
   document.getElementById("tempature").innerHTML = parseInt(data.main.temp-280);
   document.getElementById("clouds").innerHTML = data.weather[0].main;
   document.getElementById("weatherImg").setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
   document.getElementById("cityInput").value = "";
}
getWeather ('Dhaka');