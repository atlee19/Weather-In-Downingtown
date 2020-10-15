const city = "Downingtown"
const key = "758d03a426da12aba369174e1675ed88"


fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
.then(res => res.json())
.then(data => {
    const weather = data.weather[0]
    
    const weatherCard = document.getElementById("weather_info")
    weatherCard.innerHTML += `<h1>${city}</h1>`
    weatherCard.innerHTML += `<h3>${weather.description}</h3>`
    setBackground(weather.main, weather.description)
})


const setBackground = (mainWeather, weatherDesc) => {
    switch (mainWeather) {
        case "Clear":
            Clear()
            break;
        
        case "Clouds":
            Clouds(weatherDesc)
            break;
    
        default:
            break;
    }
}

const Clear = () => {
    document.body.style.backgroundImage = "url('clearSky.jpg')"
}

const Clouds = (weatherDesc) => {
    switch (weatherDesc) {
        case "few clouds":
            //code
            console.log('few clouds detected!')
            break;
        
        case "scattered clouds":
            //code
            break;
        
        case "broken clouds":
            //code
            break;

        case "overcast clouds":
            //code 
            break;
    
        default:
            console.log('no cloud options detected')
            break;
    }
}