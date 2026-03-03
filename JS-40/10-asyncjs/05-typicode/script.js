const apiURL = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiURL + "?_limit=6")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDOM(todo));
    });
};

const addTodoToDOM = (todo) => {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(todo.title));
  div.classList.add("todo");
  div.setAttribute("data-id", todo.id);

  if (todo.completed) {
    div.classList.add("done");
  }
  document.getElementById("todo-list").appendChild(div);
};

const createToDo = (e) => {
  e.preventDefault();

  console.log(e.target.firstElementChild.value);

  const newToDo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiURL, {
    method: "POST",
    body: JSON.stringify(newToDo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data));
};

function toggleCompleted(e) {
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("done");

    updateToDo(e.target.dataset.id, e.target.classList.contains("done"));
  }
}

function updateToDo(id, completed) {
  fetch(`${apiURL}/${id}`, {
    method: "put",
    body: JSON.stringify({ completed }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function deleteTodo(e) {
  if (e.target.classList.contains("todo")) {
    const id = e.target.dataset.id;
    fetch(`${apiURL}/ ${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then(() => e.target.remove());
  }
}

const init = () => {
  document.addEventListener("DOMContentLoaded", getTodos);
  document.querySelector("#todo-form").addEventListener("submit", createToDo);
  document
    .querySelector("#todo-list")
    .addEventListener("click", toggleCompleted);
  document.querySelector("#todo-list").addEventListener("dblclick", deleteTodo);
};

init();
