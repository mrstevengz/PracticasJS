function add(a, b) {
  return a + b;
}

//Arrow Function

const addArrow = (a, b) => {
  return a + b;
};

//Arrow Shortened Implicit Return

const subtract = (a, b) => a - b;

//Se pueden emitir los parentesis
const double = (a) => a * 2;

//Retornar un objeto

const createObj = () => ({
  name: "Brad",
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

console.log(addArrow(1, 2));
console.log(subtract(5, 10));
