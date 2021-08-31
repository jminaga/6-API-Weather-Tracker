const button = document.getElementById("btn");
const input = document.getElementById("city");
let currentWeather = {}
let forecast = []
const apiKey = "3cf21a31c2b19bf2843b89dbcd524c65"

const todayBox = document.getElementById("todayBox");
const forecastBox = document.getElementById("forecastBox");

function getForecast(city) {

//API call to get Current Weather
console.log(currentWeather);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => renderForecast(data.list));

}
//API call to get forecast
function getCurrent() {
    let cityName = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => renderCurrent(data))
        .then(getForecast(cityName))

}

//Display current temperature
function renderCurrent(weather){
    console.log(weather)
    let wind = weather.wind.speed
    let temp = weather.main.temp
    let humidity = weather.main.humidity
    let icon = weather.weather[0].icon
    let description = weather.weather[0].description
    let name = weather.name

    temp = Math.floor(((temp-273.15) * 9)/5 +32 )
    console.log(temp);
    let template = `
        <div>
            <h2>Current Weather</h2>
            <h1>${name}</h1>
            <p>
            Temperature: ${temp}°F <br>
            Wind: ${wind} MPH <br>
            Humidity: ${humidity} <br>
            ${description}
            <p>
            <img src="http://openweathermap.org/img/wn/${icon}@2x.png"
        </div>
    `
    todayBox.innerHTML = template
}

function renderForecast(forecast){

   
let fiveDayForecast = [];
    
let dayOne = forecast[0]
let dayTwo = forecast[8]
let dayThree = forecast[16]
let dayFour = forecast[24]
let dayFive = forecast[32]

fiveDayForecast.push(dayOne)
fiveDayForecast.push(dayTwo)
fiveDayForecast.push(dayThree)
fiveDayForecast.push(dayFour)
fiveDayForecast.push(dayFive)

 //! create a for loop for the fiveDayForecast array
 //! within the forloop create a variable for each item 
 //! 

 for (var i = 0; i < fiveDayForecast.length; i++){
     console.log(fiveDayForecast[i])
     //! declare variables for data from the API 
     let temp = fiveDayForecast[i].main.temp
     let date = fiveDayForecast[i].dt_txt
     let description = fiveDayForecast[i].weather[0].description
     let icon = fiveDayForecast[i].weather[0].icon
     let wind = fiveDayForecast[i].wind.speed
     let humidity = fiveDayForecast[i].main.humidity

     temp = Math.floor(((temp-273.15) * 9)/5 +32 )
     console.log(temp)
     

     //! declare variable for HTML elements
     let div = document.createElement("div")
     let heading = document.createElement("h2")
     heading.innerText = `${date}` 
        div.append(heading);

     let p = document.createElement("p")
     let img = document.createElement("img")
     img.src=`http://openweathermap.org/img/wn/${icon}@2x.png`
     let a = document.createElement("a")
     p.innerHTML = `
     Temperature: ${temp}°F <br>
     Wind: ${wind} MPH <br>
     Humidity: ${humidity} <br>
      ${description}
     `

     forecastBox.append(div,p,img)
    
 }
 

console.log(fiveDayForecast);
}

button.addEventListener('click', getCurrent);

