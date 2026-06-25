const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") {
  body.classList.add("light");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  localStorage.setItem("portfolio-theme", body.classList.contains("light") ? "light" : "dark");
});

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("show"));
});