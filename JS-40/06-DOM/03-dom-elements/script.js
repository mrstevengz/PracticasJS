//Get child elements
let output;

const parent = document.querySelector(".parent");

output = parent.children;

output = parent.children[1].innerText;
output = parent.children[2].className;

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "blue";

parent.firstElementChild.innerText = "Child One";

//Get Parent Element from Child

const child = document.querySelector(".child");
child.parentElement.style.border = "1px solid #ccc";

//Sibling element

const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.padding = "10px";
secondItem.previousElementSibling.innerText = "YOOOOO";

console.log(output);
