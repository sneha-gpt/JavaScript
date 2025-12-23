let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let emailError = document.querySelector("#email-error");
let passwordError = document.querySelector("#password-error");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    let validEmail = emailRegex.test(email.value);
    let validPassword = passwordRegex.test(password.value);

    if(!validEmail)
        emailError.textContent = "Email is Incorrect";

    if(!validPassword)
        passwordError.textContent = "Password is Incorrect";
    
})