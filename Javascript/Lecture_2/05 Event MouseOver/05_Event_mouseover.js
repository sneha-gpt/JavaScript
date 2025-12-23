let div = document.querySelector("#abcd");

div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "yellow";
})

div.addEventListener("mouseout", () => {
    div.style.backgroundColor = "red";
})

window.addEventListener("mousemove", (e) => {
    console.log(e.clientX, e.clientY);
    div.style.top = e.clientY + "px";
    div.style.left = e.clientX + "px";
})