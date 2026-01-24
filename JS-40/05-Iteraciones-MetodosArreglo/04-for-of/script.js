const arr = ["book", "table", "chair", "kite"];
const usuarios = [{ name: "Brad" }, { name: "Steven" }];

//Forma tradicional
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//For Of

for (const item of arr) {
  console.log(item);
}

for (const users of usuarios) {
  console.log(users.name);
}

//Loop sobre cadenas

const string = "Hola mundo";

for (const letter of string) {
  console.log(letter);
}

const map = new Map();
map.set("name", "John");
map.set("age", "30");

for (const [key, value] of map) {
  console.log([key, value]);
}
