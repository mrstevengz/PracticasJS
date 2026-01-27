// function insertElement(text) {
//   const mainc = document.querySelector(".main-container");
//   const h1 = document.createElement("h1");
//   h1.textContent = text;

//   mainc.insertAdjacentElement("afterbegin", h1);
// }

// insertElement("Hola Mundo");

function insertBeforeBtn() {
  const list = document.querySelector(".button-group");
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = "Refrescar";

  const item = list.querySelector("button:nth-child(3)");
  list.insertAfter(list, item);
}

insertBeforeBtn();

function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}
