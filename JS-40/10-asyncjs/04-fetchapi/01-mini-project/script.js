//FETCHING A JSON FILE

fetch("./recipes.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching recipes.json:", error));

function createPost({ id, name, ingredients, image, description }) {
  fetch("recipes.json", {
    method: "POST",
    body: JSON.stringify({
      id,
      name,
      ingredients,
      image,
      description,
    }),
    headers: {
      token: "abc123",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

createPost({
  id: "1",
  name: "Carne Asada Nica",
  ingredients: "lorem",
  image: "images/dasdas",
  description: "lorem",
});
