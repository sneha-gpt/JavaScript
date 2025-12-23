let ul = document.querySelector("ul");

// Event Delegation

ul.addEventListener("click", (e) => {
   e.target.classList.toggle("yolo");
})
