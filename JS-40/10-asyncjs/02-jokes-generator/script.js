const btn = document.querySelector("#joke-btn");
const p = document.querySelector("#joke");

function loadJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      p.innerHTML = data.value;
    }
  };
  xhr.send();
}

document.addEventListener("DOMContentLoaded", loadJoke);
btn.addEventListener("click", loadJoke);
