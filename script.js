const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
card.addEventListener("mouseover", () => {
card.style.background = "#334155";
});

card.addEventListener("mouseout", () => {
card.style.background = "#1e293b";
});
});
