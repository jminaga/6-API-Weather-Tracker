const button = document.getElementById("btn");
const input = document.getElementById("city");
let currentWeather 
let forecast = []
const apiKey = "3cf21a31c2b19bf2843b89dbcd524c65"


function getForecast(city) {


    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => console.log(data.list))
    const {}
}

function getCurrent() {
    let cityName = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => currentWeather = data)
        .then(getForecast(cityName))

}



button.addEventListener('click', getCurrent);

