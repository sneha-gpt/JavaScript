let nm = document.querySelector("#name");
let nameError = document.querySelector("#name-hide");

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(nm.value.length <= 2)
        nameError.style.display = "initial";
    else 
        nameError.style.display = "none";
})