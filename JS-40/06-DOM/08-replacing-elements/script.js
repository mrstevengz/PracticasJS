// function replaceFirstBtn() {
//   const firstitem = document.querySelector("button:first-child");
//   const newbtn = document.createElement("button");
//   newbtn.className = "btn";
//   newbtn.textContent = "Hola";

//   firstitem.replaceWith(newbtn);
// }

// function replaceSecondItem() {
//   const secondBtn = document.querySelector("button:nth-child(2)");
//   secondBtn.outerHTML = "<button class = 'btn'>Editar</button>";
// }
// replaceFirstBtn();
// replaceSecondItem();

// function replaceAllBtn() {
//   const buttons = document.querySelectorAll("button");
//   buttons.forEach(function (button, index) {
//     button.outerHTML = `<button class='btn'>New Button ${index + 1}</button>`;
//   });
// }

// replaceAllBtn();

// function replaceChildHeading() {
//   const header = document.querySelector(".main-container");
//   const h1 = document.querySelector(".main-container h1");
//   const h2 = document.createElement("h2");
//   h2.id = "app-title";
//   h2.textContent = "LDE";
//   header.replaceChild(h2, h1);
// }

// replaceChildHeading();

function removeFirstBtn() {
  const cont = document.querySelector(".button-group");
  const btn = document.querySelector("button:first-child");

  cont.removeChild(btn);
}

removeFirstBtn();
