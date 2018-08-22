const renderWeather = require("./renderWeather")
const loginHTML = require("./login/loginHTML")
const userSS = require("./login/userSS")
const manageUserData = require("./DataManager")

document.querySelector("#login").innerHTML = loginHTML()

document.querySelector("#loginButton").addEventListener("click", () => {
    let username = document.querySelector("#loginName").value;
    let password = document.querySelector("#loginPassword").value;

    manageUserData.getUsers()
        .then(result => {
            let user = result.find(result => username === result.username && password === result.password)
            if (!user) {
                alert("Username does not exist")
            } else {
                userSS.setUserInSS()
                
                renderWeather.renderWeather()
            }
        })
})

document.querySelector("#guestLogin").addEventListener("click", () => {
    document.querySelector("#login").innerHTML = ""
    renderWeather.renderDefaultWeather()
})

