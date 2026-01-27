let output;

const parent = document.querySelector(".parent");

output = parent.childNodes;
output = parent.childNodes[0];
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].outerHTML;

output = parent.firstChild;
output = parent.lastChild;

//Parent Node

const child = document.querySelector(".child");
child.parentNode = output;

//Siblings

const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem.previousSibling;
output = secondItem.nextSibling;

console.log(output);
