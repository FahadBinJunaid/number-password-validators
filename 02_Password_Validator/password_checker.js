
const Realpassword = "admin123"
let user_input = document.getElementById("password_input")
let btn = document.getElementById("Login")
let result = document.getElementById("result")
let alertBox = document.getElementById("alertBox")

let password_checker = () => {
    let password = user_input.value;

    if (password == Realpassword) {
        alertBox.classList.remove("hidden")
        setTimeout( () => {
            window.location.href = "https://fahadbinjunaid.github.io/Smit-Etsy-website/"
        },1000
        )
        result.innerHTML = "Login Successful"
        result.className = "text-green-500"
    } else if (password == "") {
        result.innerHTML = "Please enter something!"
    } else {
        result.innerHTML = "Incorrect Password"
    }
}

btn.addEventListener("click", password_checker)
