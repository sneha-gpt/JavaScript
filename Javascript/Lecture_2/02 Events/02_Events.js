let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     p.style.color = "red";
// });

function click(){
    p.style.color = "red";
}

p.addEventListener("click", click);
p.removeEventListener("click", click);

p.addEventListener("dblclick", () => {
    p.style.color = "green";
});

let inp = document.querySelector("input");

inp.addEventListener("input", (details) => {
   if(details.data !== null)
    console.log(details.data);
})

let select = document.querySelector("select");
let heading = document.querySelector("#device");
select.addEventListener("change", (details) => {
       let device = details.target.value;
       console.log(device);
       heading.textContent = `${device} is Selected`; 
})