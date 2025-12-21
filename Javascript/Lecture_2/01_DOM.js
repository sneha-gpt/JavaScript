let h2 = document.querySelector("h2");

// h2.textContent = "Hello Sneha";
// h2.innerText = "Hii";
h2.innerHTML = "<i>Hello Sneha</>"
// h1.hidden = true;
console.log(h2);

// Attributes 
let a = document.querySelector("a");
a.setAttribute("href", "https://www.google.com")

console.log(a.getAttribute("href"));
a.removeAttribute("href");

// Create Element 
// Append prepend 

let h = document.createElement("h1");
h.textContent = "Hii Sneha";
document.querySelector("div").append(h);

let h1 = document.createElement("h1");
h1.textContent = "Hii Gupta";
document.querySelector("div").prepend(h1);

// Remove 
h2.remove();

// Style 
h1.style.color = "red";
h1.style.backgroundColor = "yellow";
h1.style.textTransform = "Capitalize";

// Class List
h.classList.add("hulu");
h.classList.remove("hulu");
h.classList.toggle("hulu");

