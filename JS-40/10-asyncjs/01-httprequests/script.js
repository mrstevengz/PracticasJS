const xhr = new XMLHttpRequest();

xhr.open("GET", "recipes.json");

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);

    data.forEach((recipe) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${recipe.name}</strong> - ${recipe.description}`;
    });
  }
};

xhr.send();
