const apiKey="c2d207c6dde0d257e39e705751870bb1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=paris";

async function checkWeather(){
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML= data.main.temp + "°C";
document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";


}
checkWeather();