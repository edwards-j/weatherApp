const weatherHTML = (w) => {
    let currentTempF = Math.floor(((w.main.temp-273.15)*1.8)+32)
    let maxTempF = Math.floor(((w.main.temp_max-273.15)*1.8)+32)
    let minTempF = Math.floor(((w.main.temp_min-273.15)*1.8)+32)

    return `
    <div>
    <h2>${w.name}</h2>
    <h4>${w.weather[0].main}</h4>
    <img src="http://openweathermap.org/img/w/${w.weather[0].icon}.png">
    <p>${w.weather[0].description}</p>
    <p>Current Temp: ${currentTempF}˚F</p>
    <p>Max Temp: ${maxTempF}˚F</p>
    <p>Min Temp: ${minTempF}˚F</p>
    <p>Humidity: ${w.main.humidity}%</p>
    <p>Clouds: ${w.clouds.all}%</p>
    </div>
    `
}

module.exports = weatherHTML