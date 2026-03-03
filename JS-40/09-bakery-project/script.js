let items = [];

async function loadItems() {
  try {
    const response = await fetch("recipes.json");
    items = await response.json();
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
}

const modal = document.querySelector(".modal");
const closebtn = document.querySelector(".close");
const image = document.querySelector(".modal-item-img");
const title = document.querySelector(".modal-item-name");
const ing = document.querySelector(".modal-item-ingredients");
const recipe = document.querySelector(".modal-item-description");
const favBtn = document.querySelectorAll(".fav");
const recipeBox = document.querySelector(".recipes-box");

function loadRecipes() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "recipes.json");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const recipes = JSON.parse(this.responseText);

      recipes.forEach((recipe) => {
        const div = document.createElement("div");
        div.classList.add("menu-item");
        div.innerHTML = `
        <span class="fav material-symbols-outlined">favorite</span>
        <img src="${recipe.image}" alt="${recipe.name}" class="item-img">
        <h3 class="item-name">${recipe.name}</h3>
        <h4 class="item-price">$12.50</h4>
        <button class="main-button" data-id="${recipe.id}">View</button>
        `;
        recipeBox.appendChild(div);
      });
    }
  };
  xhr.send();
}

function openModal() {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function createModals(e) {
  if (e.target.classList.contains("main-button")) {
    const id = parseInt(e.target.dataset.id);
    const item = items.find((obj) => obj.id === id);

    if (item) {
      title.textContent = item.name;
      image.src = item.image;
      image.alt = item.name;
      ing.textContent = item.ingredients;
      recipe.textContent = item.description;
      openModal();
    }
  }
}

function favIcon(e) {
  const fav = e.target.closest(".fav");
  if (!fav) return;
  fav.classList.toggle("active");
}

//Events

document.addEventListener("click", createModals);
closebtn.addEventListener("click", closeModal);
document.addEventListener("click", favIcon);
document.addEventListener("DOMContentLoaded", loadRecipes);
loadItems();
