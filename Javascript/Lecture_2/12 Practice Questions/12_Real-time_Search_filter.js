const users = [
  {
    name: "Amisha",
    designation: "Frontend Engineer",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    coverPic: "https://images.unsplash.com/photo-1503264116251-35a269479413"
  },
  {
    name: "Amaya",
    designation: "UI Designer",
    profilePic: "https://media.istockphoto.com/id/1303539316/photo/one-beautiful-woman-looking-at-the-camera-in-profile.webp?a=1&b=1&s=612x612&w=0&k=20&c=iV7DbVrhdMwaoYiFhP-No3fvMU-n_k1os8Y74I1Fgok="
  },
  {
    name: "Amit",
    designation: "Backend Developer",
    profilePic: "https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29ycG9yYXRlJTIwcHJvZmlsZSUyMGltYWdlJTIwb2YlMjBhJTIwcGVyc29uJTIwbWVufGVufDB8fDB8fHww"
  },
  {
    name: "Aman",
    designation: "DevOps Engineer",
    profilePic: "https://images.unsplash.com/photo-1741675121661-3ace9d68caba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29ycG9yYXRlJTIwcHJvZmlsZSUyMGltYWdlJTIwb2YlMjBhJTIwcGVyc29uJTIwbWVufGVufDB8fDB8fHww"
  },
  {
    name: "Rahul",
    designation: "Software Engineer",
    profilePic: "https://media.istockphoto.com/id/172359733/photo/one-indian-asian-people-young-office-worker-horizontal.webp?a=1&b=1&s=612x612&w=0&k=20&c=Uk0QKwendsyrbNaEMjN9XSdXx9SSM2cLEUH_x8OIiF8="
  },
  {
    name: "Raghav",
    designation: "System Architect",
    profilePic: "https://media.istockphoto.com/id/1217962587/photo/portrait-of-a-young-confident-smiling-asian-chinese-businessman.webp?a=1&b=1&s=612x612&w=0&k=20&c=QX1JwDMtq-Wt4papiDrw9C1eLRY_civVN6pfqXaoghA="
  },
  {
    name: "Rashi",
    designation: "Product Manager",
    profilePic: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?a=1&b=1&s=612x612&w=0&k=20&c=u5RPl326UFf1oyrM1iLFJtqdQ3K28TdBdSaSPKeCrdc="
  },
  {
    name: "Kunal",
    designation: "Data Engineer",
    profilePic: "https://media.istockphoto.com/id/116192438/photo/one-indian-it-software-engineer-white-collar-worker-computer-people.webp?a=1&b=1&s=612x612&w=0&k=20&c=yCT6pKSUFtfymcCnUzx6SeSqS8yrWLDeVYZH8mOcJ3c="
  }
];

let cardContainer = document.querySelector("#cards-container");

function showcard(arr){
    arr.forEach(e => {

        let card = document.createElement("div");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");

        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(p);

        cardContainer.appendChild(card);

        card.classList.add("card");

        img.setAttribute("src", e.profilePic);
        h3.textContent = e.name;
        p.textContent = e.designation;
    });
}


showcard(users);

let input = document.querySelector("#search");
let noUsers = document.querySelector("#no-users");

input.addEventListener("input", (e) => {
    let inp = e.target.value;
    console.log(e.target.value);

    let newUsers = users.filter((user) => {
        return user.name.startsWith(inp);
    });

    cardContainer.innerHTML = "";
    
    if(newUsers.length === 0){
        noUsers.classList.add("show");
    } else {
        noUsers.classList.remove("show");
        showcard(newUsers);
    }
});