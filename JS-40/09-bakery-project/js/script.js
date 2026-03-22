const global = {
  currentPage: window.location.pathname,
};

const modal = document.querySelector(".modal");
const closebtn = document.querySelector(".close");
const image = document.querySelector(".modal-item-img");
const title = document.querySelector(".modal-item-name");
const ing = document.querySelector(".modal-item-ingredients");
const recipe = document.querySelector(".modal-item-description");
const favBtn = document.querySelectorAll(".fav");
const recipeBox = document.querySelector(".recipes-box");

async function getAPIData(endpoint) {
  const API_KEY = "5cc82d1e6d32427aad65588470d4bf67";
  const API_URL = "https://api.spoonacular.com/";

  try {
    const res = await fetch(
      `${API_URL}${endpoint}&apiKey=${API_KEY}&language=en-US`,
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
}

async function displayPopularRecipes() {
  const results = await getAPIData("recipes/random?number=5");
  const recipes = Array.isArray(results?.recipes) ? results.recipes : [];

  recipes.forEach((recipe) => {
    const div = document.createElement("div");
    div.classList.add("menu-item");
    div.innerHTML = `
            <span class="fav material-symbols-outlined">favorite</span>
            <img src="${recipe.image}" alt="${recipe.title}" class="item-img">
            <h3 class="item-name">${recipe.title}</h3>
            <button class="main-button" data-id="${recipe.id}">View</button>
            `;
    recipeBox.appendChild(div);
  });
}

function openModal() {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

async function createModals(e) {
  if (e.target.classList.contains("main-button")) {
    const recipeid = parseInt(e.target.dataset.id);
    const results = await getAPIData(
      `recipes/${recipeid}/information?includeNutrition=false`,
    );

    const ingredients = await getAPIData(`
      recipes/${recipeid}/ingredientWidget.`);

    if (results) {
      title.textContent = results.title;
      image.src = results.image;
      image.alt = results.title;
      ing.textContent = results.ingredients;
      recipe.innerHTML = results.summary;
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

function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      displayPopularRecipes();
      break;
    default:
      break;
  }
}

document.addEventListener("DOMContentLoaded", init);
