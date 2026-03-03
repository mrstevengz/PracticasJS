const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const itemClear = document.getElementById("clear");
const itemFilter = document.getElementById("filter-div");
const formBtn = itemForm.querySelector("button");
let isEditMode = false;

function displayItems() {
  hideUI();

  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.forEach((item) => addItemtoDOM(item));
}

function onAddItemSubmit(e) {
  e.preventDefault();
  const newItem = itemInput.value;

  //Validacion

  if (newItem === "") {
    alert("Please add an item to the list");
    return;
  }
  console.log("success");

  if (isEditMode) {
    const itemToEdit = itemList.querySelector(".edit-mode");

    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove("edit-mode");
    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (checkIfItemExists(newItem)) {
      alert("That item already exists");
      return;
    }
  }

  //Crear item DOM
  addItemtoDOM(newItem);

  //Item se agrega a local storage
  addItemtoStorage(newItem);

  itemInput.value = "";

  hideUI();
}

function addItemtoDOM(item) {
  //Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  itemList.appendChild(li);
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

function addItemtoStorage(item) {
  let itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.push(item);

  //Convertir en JSON string y mandarlo a local storage

  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  let itemsFromStorage;

  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }

  return itemsFromStorage;
}

function removeItem(item) {
  if (confirm("Are you sure?")) {
    //Borrar del DOM
    item.remove();

    //Borrar de local storage
    removeItemFromStorage(item.textContent);

    hideUI();
  }
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();

  //Filtrar item para borrarlo

  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function onClickItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemtoEdit(e.target);
  }
}

function checkIfItemExists(item) {
  const itemsFromStorage = getItemsFromStorage();

  return itemsFromStorage.includes(item);
}

function setItemtoEdit(item) {
  isEditMode = true;

  itemList
    .querySelectorAll("li")
    .forEach((i) => i.classList.remove("edit-mode"));

  item.classList.add("edit-mode");
  formBtn.innerHTML = '<i class = "fa-solid fa-pen"></i>  Update Item';
  formBtn.style.backgroundColor = "#228B22";
  itemInput.value = item.textContent;
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  localStorage.removeItem("items");

  hideUI();
}

function hideUI() {
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    itemFilter.style.display = "none";
    itemClear.style.display = "none";
  } else {
    itemFilter.style.display = "";
    itemClear.style.display = "";
  }

  formBtn.innerHTML = '<i class = "fa-solid fa-plus"></i> Add Item';
  formBtn.style.backgroundColor = "#333";

  isEditMode = false;
}

function filterItems(e) {
  const items = itemList.querySelectorAll("li");
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(text) != -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

//Event Listeners

function init() {
  itemForm.addEventListener("submit", onAddItemSubmit);
  itemList.addEventListener("click", onClickItem);
  itemClear.addEventListener("click", clearItems);
  itemFilter.addEventListener("input", filterItems);
  document.addEventListener("DOMContentLoaded", displayItems);

  hideUI();
}

init();
