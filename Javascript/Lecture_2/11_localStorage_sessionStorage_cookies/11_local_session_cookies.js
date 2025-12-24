// localStorage.setItem("user", "Sneha");

// let val = localStorage.getItem("user");
// console.log(val);

// localStorage.removeItem("user");
// localStorage.clear();

// localStorage.setItem("friends", JSON.stringify(["Rahul", "Anjali"]));

// let friends = JSON.parse(localStorage.getItem("friends"));

// console.log(friends);


let btn = document.querySelector("#theme-toggle");

let body = document.querySelector("body");

body.classList.add(localStorage.getItem("theme"));

btn.addEventListener("click", () => {
    let theme = localStorage.getItem("theme");

    if(theme == "dark"){
        body.classList.add("ligh");
        body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
    else {
        body.classList.add("dark");
        body.classList.remove("light");
        localStorage.setItem("theme", "dark");
    }
})