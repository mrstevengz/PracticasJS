// //Quick Way

// function createNewButton(item) {
//   const btn = document.createElement("button");
//   btn.innerHTML = `<button class="btn leer"><span class="material-symbols-outlined">ad</span>${item}`;

//   document.querySelector(".button-group").appendChild(btn);
// }

// createNewButton("Leer");

//Clean Way

//Funcion para crear un nuevo boton aparte de agregar, editar y eliminar. Lo primero que hace es crear una constante de boton y icono (material symbols) que mandan a llamar las funciones de createButton y createIcon, luego usando appendChild se le une el icono al codigo del boton y se le pone un nombre, el cual luego se agrega al div padre "button-group"

function createNewFeature(item) {
  const btn = createButton("btn edit");
  const icon = createIcon("material-symbols-outlined", "update");
  btn.appendChild(icon);
  btn.appendChild(document.createTextNode(item));

  document.querySelector(".button-group").appendChild(btn);
}

createNewFeature("Refrescar");

//Crea un nuevo boton y se le manda a pedir una clase. Luego lo retorna
function createButton(classes) {
  const btn = document.createElement("button");
  btn.className = classes;
  return btn;
}

//Crea un nuevo icono (span) y se le manda a pedir una clase (material symbols) y el tipo de icono. Luego lo retorna
function createIcon(classes, symbol) {
  const icon = document.createElement("span");
  icon.className = classes;
  icon.innerText = symbol;
  return icon;
}
