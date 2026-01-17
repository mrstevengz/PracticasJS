//Sintaxis para un IIFE (Immediately Invoked Function Expressions)
//Utilizados para correr funciones fuera del scope global y propios solo al archivo

(function () {
  const user = "John";
  console.log(user);
})();

(function (name) {
  console.log("Hello" + name);
})("Shawn");
