const city = "Downingtown"
const key = "758d03a426da12aba369174e1675ed88"


fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
.then(res => res.json())
.then(data => {
    const weather = data.weather[0]
    
    const weatherCard = document.getElementById("weather_info")
    weatherCard.innerHTML += `<h1>${city}</h1>`
    weatherCard.innerHTML += `<h3>${weather.description}</h3>`
    setBackground(weather.description)
})


const setBackground = (weatherDesc) => {
    switch (weatherDesc) {
        case "clear sky":
            document.body.style.backgroundImage = "url('clearSky.jpg')"
            break;
    
        default:
            break;
    }
}