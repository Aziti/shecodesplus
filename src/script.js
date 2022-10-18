//const { default: axios } = require("axios");
function formatDate(timestamp) 
{
    //calculate the date
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) { hours = `0${hours}`;}
    let minutes = date.getMinutes();
    if (minutes < 10) { minutes = `0${minutes}`;}
    let days = ["Sunday", "Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
   
        return `${day} ${hours}: ${minutes}`;
}

function displayTemperature(response) 
{
   // console.log(response.data.main.temp);

    let cityElement = document.querySelector("#city");
    let dateElement = document.querySelector("#date");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let temperatureElement = document.querySelector("#temperature");
    let iconElement = document.querySelector("#icon");
       
    celsiusTemperature = response.data.main.temp;

    cityElement.innerHTML = response.data.name;
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.innerHTML = response.data.weather[0].icon;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
    iconElement.setAttribute(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city)
{
let apikey = "3ce33118eff34374ba718f22cafc2913";
let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
axios.get(apiurl).then(displayTemperature);
}

function handleSubmit(event) 
{
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}   
function displayFahrenheitTemperature(event) 
{
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    //remove the active class the celsius link
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let fahrenheitTemperature = (celsiusTemperature * 9) /5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);

}
function displayCelsiusTemperature(event) {
    event.preventDefault();
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayFahrenheitTemperature);

search("Ethiopia");