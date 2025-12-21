let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

let main = document.querySelector("#main");

// Prevent form from submission
form.addEventListener("submit", (details) => {
    details.preventDefault();

    console.log(
        inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value
    )

let card = document.createElement("div");
let profile = document.createElement("div");
let img = document.createElement("img");

let h3 = document.createElement("h3");
let h5 = document.createElement("h5");
let p = document.createElement("p");

profile.appendChild(img);
card.appendChild(profile);
card.appendChild(h3);
card.appendChild(h5);
card.appendChild(p);

profile.classList.add("profile");
card.classList.add("card");
h3.classList.add("h3");
h5.classList.add("h5");
p.classList.add("p");

h3.textContent = inputs[0].value;
h5.textContent = inputs[1].value;
p.textContent = inputs[2].value;
img.setAttribute("src", inputs[3].value);

main.appendChild(card);

inputs.forEach((input) => {
    if(input.type !== "submit")
        input.value = "";
})
});

