const loginHTML = () => {
    return `
    <div>
        <input id="loginName" type="text" placeholder="Username">
        <input id="loginPassword" type="password" placeholder="Password">
        <button id="loginButton" class="">Login</button>
        <button id="guestLogin" class="">Login As Guest</button>
    </div>
    `
}

module.exports = loginHTML