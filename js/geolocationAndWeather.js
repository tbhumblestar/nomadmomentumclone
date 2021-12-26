const apiKey = "bf721301c3e12d8488d2e8589ed7d54d"

function onGeoSuccess(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const URL = (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    fetch(URL).then(response => response.json()).then(data =>{
        const getCity = data.name
        const getWeather = data.weather[0].description
        const getTemp = data.main.temp
        const City = document.querySelector("#location")
        const weather = document.querySelector("#weather")
        City.innerText = getCity   
        weather.innerText = `${getWeather} ${getTemp}'C`
})
}

function onGeoError(){
    alert("plz let me know..")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError)