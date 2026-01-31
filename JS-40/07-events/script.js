const vis = document.querySelector(".icon-right");
const passwordInput = document.querySelector("#password");
const logo = document.querySelector(".logo-img");
const mainContainer = document.querySelector(".main-container");

function togglePasswordVisibility() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    vis.innerText = "visibility_off";
  } else {
    passwordInput.type = "password";
    vis.innerText = "visibility";
  }
}

if (vis) {
  vis.addEventListener("click", togglePasswordVisibility);
}

const ondblClick = () => {
  if (mainContainer.style.border === "var(--surface-border)") {
    mainContainer.style.border = "var(--surface-border2)";
  } else {
    mainContainer.style.border = "var(--surface-border)";
  }
};

logo.addEventListener("dblclick", ondblClick);

//Right Click Event

// addEventListener('contextmenu', 'funcion')

//Holding Mouse

// addEventListener('mousedown', 'funcion')

// Rueda de mouse

// addEventListener("wheel", funcion);

// Draggear un objeto

// addEventListener('dragstart', function)
// addEventListener('drag', function)
