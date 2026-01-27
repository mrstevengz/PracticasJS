const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

function run() {
  //   console.log(itemList.className);
  //   text.className = "card dark";

  //classList

  console.log(itemList.classList);
  itemList.classList.forEach((c) => console.log(c));

  text.classList.toggle("dark");
}
document.querySelector("button").onclick = run;
