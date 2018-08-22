const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
}

const getNashville = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=37212,us&APPID=c7f8b6abe9d4b177ad3199e4508dc02b`)
        .then(response => response.json())
}

const getZip = (zipcode) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&APPID=c7f8b6abe9d4b177ad3199e4508dc02b`)
        .then(response => response.json())
}

module.exports = { getUsers, getNashville, getZip }