//const { default: axios } = require("axios");
function formateDate(timestamp) {
    //calculate the date
    let date = new Date(timestamp);
    let hours = temestamp.getHours();
    let minutes = date.getMinutes();
    let days = ["Sunday", "Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday"];
    let day = date.getDay();
   
        return `"{day} ${hours}: ${minutes}`;
}

function displayTemperature(response) {
    console.log(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt*1000);
    iconElement.innerHTML = `http://openweathermap.org/img/wn/0${response.data.weather[0].icon}@2x.png`;
}
let apikey = "3ce33118eff34374ba718f22cafc2913";
let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=New York.us&appid=${apikey}&units=metric`;
let city = "Ethiopia";
//console.log(apiurl);
axios.get(apiurl).then(displayTemperature);
