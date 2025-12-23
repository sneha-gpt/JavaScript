let h2 = document.querySelector("h2");

window.addEventListener("keydown", (details) => {
    let ch = details.key;

    if(ch === " "){
        h2.textContent = "Space";
        console.log("Space");
    }
    else 
    {
        h2.textContent = `${ch}`;
        console.log(`${ch}`);
    }
})

let btn = document.querySelector("#btn");
let input = document.querySelector("#fileinput")

btn.addEventListener("click", () => {
    input.click();
})

input.addEventListener("change", (details) => {
    const file = details.target.files[0];
    if(file){ // When cancel no file will be there  
        btn.textContent = details.target.files[0].name;
    }
})

