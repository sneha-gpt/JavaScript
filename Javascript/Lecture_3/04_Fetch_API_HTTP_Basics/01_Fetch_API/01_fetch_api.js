const API_URL = "https://jsonplaceholder.typicode.com/users";

const cardContainer = document.getElementById("card-container");
const loadMoreBtn = document.getElementById("load-more");

let users = [];        // store all users
let currentIndex = 0; // track which users are shown
const USERS_PER_LOAD = 3;

// Fetch data from API
async function fetchUsers() {
    try {
        const response = await fetch(API_URL);
        users = await response.json();
        showUsers();
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// function fetchUsers(){
//     fetch(API_URL)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }

function showUsers() {
    cardContainer.innerText = "";
    const nextUsers = users.slice(currentIndex, currentIndex + USERS_PER_LOAD);

    nextUsers.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${user.name}</h2>
            <p><span>Email:</span> ${user.email}</p>
            <p><span>Phone:</span> ${user.phone}</p>
            <p><span>Website:</span> ${user.website}</p>
            <p><span>Company:</span> ${user.company.name}</p>
        `;

        cardContainer.appendChild(card);
    });

    currentIndex += USERS_PER_LOAD;

    if (currentIndex >= users.length) {
        loadMoreBtn.style.display = "none";
    }
}

loadMoreBtn.addEventListener("click", showUsers);

fetchUsers();
