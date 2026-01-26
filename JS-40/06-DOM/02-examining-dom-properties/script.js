//Single Element Method

//Para elementos por ID
// document.getElementById();
// document.getElementById().id;
// document.getElementById().className;
// document.getElementById().getAttribute("id");

//Set Atributes

// document.getElementById("contenedor").id = "new-id";
// document.getElementById("contenedor").title = "HOLA";
// document.getElementById("contenedor").setAttribute("class", "title");

const title = document.getElementById("contenedor");

//Get/Change Content

// console.log(title.textContent);
// title.textContent = "Hola";
// title.innerText = "Hello Again";
// title.innerHTML = "<strong> LDE </strong>";

// //Change styles
// title.style.color = "red";
// title.style.backgroundColor = "black";
// title.padding = "10px";
// title.borderRadius = "10px;";

//document.querySelector()

console.log(document.querySelector("h1"));
console.log(document.querySelector(".container"));

//document.querySelectorAll()

const listItems = document.querySelectorAll("button");
console.log(listItems[0]);

listItems[0].style.color = "red";

listItems.forEach((item) => {
  item.style.color = "red";
});
