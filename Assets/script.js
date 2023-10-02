const apiKey = "c2d207c6dde0d257e39e705751870bb1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
var inputText = document.getElementById("input-text");
var searchBtn = document.getElementById("search-btn");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humid = document.getElementById("humid");
var cityNameText = document.getElementById("city-name-text");
var weatherImg = document.getElementById("icon");
// .textContent

searchBtn.addEventListener("click", function () {
  console.log(inputText.value);
  checkWeather(inputText.value);
  cityNameText.textContent = inputText.value;
});

async function checkWeather(cityName) {
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
  temp.textContent = "Temp: " + data.main.temp + "°F";
  wind.textContent = " Wind: " + data.wind.speed + "MPH";
  humid.textContent = " Humidity: " + data.main.humidity + "%";
  // https://openweathermap.org/img/wn/10d@2x.png

  var dataIcon = data.weather[0].icon;
  console.log(dataIcon);
  var iconurl = "https://openweathermap.org/img/wn/" + dataIcon + "@2x.png";
  console.log(iconurl);
  weatherImg.setAttribute("src", iconurl);
}
