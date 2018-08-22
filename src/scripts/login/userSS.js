//Author: Jonathan Edwards
//Purpose: Getting the user ID from Session Storage

const setUserInSS = () => {
    currentUser = {
        username: document.querySelector("#loginName").value,
        password: document.querySelector("#loginName").value,
        zipcode: 37212
    }
    let stringifiedUserObject = JSON.stringify(currentUser);
    sessionStorage.setItem("currentUser", stringifiedUserObject)

}

const loadUserIDFromSS = () => {
    let stringifiedUser = sessionStorage.getItem("currentUser");
    let parsedUser = JSON.parse(stringifiedUser);
    return parsedUser[0].id
}

const loadUserNameFromSS = () => {
    let stringifiedUser = sessionStorage.getItem("currentUser");
    let parsedUser = JSON.parse(stringifiedUser);
    return parsedUser[0].username
}

const loadZipFromSS = () => {
    let stringifiedUser = sessionStorage.getItem("currentUser");
    let parsedUser = JSON.parse(stringifiedUser);
    console.log(parsedUser)
    return parsedUser.zipcode
}



module.exports = { setUserInSS, loadUserIDFromSS, loadUserNameFromSS, loadZipFromSS }
