const stack = document.getElementById("stack");
const modal = document.getElementById("modal");
const form = document.getElementById("card-form");

const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const addBtn = document.getElementById("add");

let cards = JSON.parse(localStorage.getItem("cards")) || [];
let currentIndex = 0;

/* Render cards */
function renderCards() {
  stack.innerHTML = "";

  cards.slice(currentIndex, currentIndex + 4).forEach((card, i) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${card.name}</h3>
      <p>${card.role}</p>
    `;

    div.style.transform =
      `translateY(${i * 10}px) scale(${1 - i * 0.06})`;
    div.style.opacity = i === 0 ? 1 : 0.6 - i * 0.15;
    div.style.zIndex = 10 - i;

    stack.appendChild(div);
  });
}

/* Navigation */
upBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderCards();
  }
};

downBtn.onclick = () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    renderCards();
  }
};

/* Open modal */
addBtn.onclick = () => {
  modal.style.display = "flex";
};

/* Submit form */
form.onsubmit = e => {
  e.preventDefault();

  const name = form.name.value;
  const role = form.role.value;

  cards.push({ name, role });
  localStorage.setItem("cards", JSON.stringify(cards));

  modal.style.display = "none";
  form.reset();
  renderCards();
};

/* Close modal on outside click */
modal.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

/* Initial render */
renderCards();
