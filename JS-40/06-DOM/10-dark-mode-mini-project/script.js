// const container = document.querySelector(".container");
// const mainContainer = document.querySelector(".main-container");
// const buttons = document.querySelectorAll(".btn");
// const h1 = mainContainer.querySelector("h1");
// const bookList = document.querySelector(".book-list");

// function darkmode() {
//   mainContainer.classList.toggle("dark");
//   buttons.forEach((button) => button.classList.toggle("dark"));
//   h1.classList.toggle("dark");
//   container.classList.toggle("darker");
//   bookList.classList.toggle("darker");
// }

// const darkModeBtn = document.querySelector(".dark-mode");
// if (darkModeBtn) darkModeBtn.onclick = darkmode;

const darkModeBtn = document.querySelector(".dark-mode");
const htmlTheme = document.documentElement;

if (darkModeBtn) darkModeBtn.onclick = toggleTheme;

function toggleTheme() {
  const currentTheme = htmlTheme.getAttribute("data-theme") || "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  htmlTheme.setAttribute("data-theme", nextTheme);
}
