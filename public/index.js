const city = "Downingtown"
const key = "758d03a426da12aba369174e1675ed88"


fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
.then(res => res.json())
.then(data => console.log(data.weather))