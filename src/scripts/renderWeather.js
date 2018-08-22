const getWeather = require("./DataManager");
const weatherHTML = require("./weatherHTML")
const userSS = require("./login/userSS")

const renderWeather = () => {
    userZip = userSS.loadZipFromSS()
    getWeather.getZip(userZip)
    .then(weather => {
        document.querySelector("#weather").innerHTML = weatherHTML(weather)
    })
    .then((() => {
        document.querySelector("#newWeatherForm").innerHTML = `<input type="text" id="weatherZipInput" placeholder="Enter Zipcode">
        <button id="weatherZipButton">Check Weather</button>`
    }))
    .then(() => {
        document.querySelector("#weatherZipButton").addEventListener("click", () => {
            newZip = document.querySelector("#weatherZipInput").value
            getWeather.getZip(newZip)
            .then(res => document.querySelector("#weather").innerHTML = weatherHTML(res))
        })
    })
}

const renderDefaultWeather = () => {
    getWeather.getZip(90210)
    .then(weather => {
        document.querySelector("#weather").innerHTML = weatherHTML(weather)
    })
    .then((() => {
        document.querySelector("#newWeatherForm").innerHTML = `<input type="text" id="weatherZipInput" placeholder="Enter Zipcode">
        <button id="weatherZipButton">Check Weather</button>`
    }))
    .then(() => {
        document.querySelector("#weatherZipButton").addEventListener("click", () => {
            newZip = document.querySelector("#weatherZipInput").value
            getWeather.getZip(newZip)
            .then(res => document.querySelector("#weather").innerHTML = weatherHTML(res))
        })
    })
}


module.exports = { renderWeather, renderDefaultWeather }