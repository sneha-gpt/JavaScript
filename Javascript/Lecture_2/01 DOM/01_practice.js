// Select all <li> elements and print their text using a loop 

let li = document.querySelectorAll("li");

li.forEach((val) => {
    console.log(val.textContent)
});

// Add a title attribute to div dynamically 

let div = document.querySelector("div");

div.setAttribute("title", "Hello");

// Create a new list item <li>Mango</li> and add it to the end of a <ul>

let ul = document.querySelector("ul");
let new_li = document.createElement("li");

new_li.textContent = "Mango";

ul.append(new_li);

// Create a new image element with a placeholder source and add it at the top of a div

let img = document.createElement("img");

img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1764826536125-46111ad9a20d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8");

img.classList.add("placeholder");
div.prepend(img);

// Add a highlight class to every even item in a list 

for(let i = 0;i < li.length;i += 2){
    li[i].classList.add("highlight");
}