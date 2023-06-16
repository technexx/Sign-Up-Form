let password = document.querySelector("#password")
let confirm_password = document.querySelector("#confirm-password")

function checkMatchingPasswords() {
    if (password.value  == confirm_password.value) {
        password.style.border = "2px solid black"
        confirm_password.style.border = "2px solid black"
        console.log("match!")
    } else {
        password.style.border = "2px solid red"
        confirm_password.style.border = "2px solid red"
        console.log("nope!")
    }
}

document.querySelector("#submit-button").addEventListener("click", () => {
    console.log("clicked!")
    checkMatchingPasswords()
})