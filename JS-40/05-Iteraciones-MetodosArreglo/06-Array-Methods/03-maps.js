const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = numbers.map((number) => number ** 3);

// console.log(newNumbers);

// //For Each Ejemplo

// const doubledNumbers2 = [];

// numbers.forEach((number) => {
//   doubledNumbers2.push(number * 2);
// });

// console.log(doubledNumbers2);

//Chain map

// const squareandDouble = numbers
//   .map((number) => Math.sqrt(number))
//   .map((sqrt) => sqrt * 2);

//Chaining multiple Array methods

const evenSquared = numbers
  .filter((numbers) => numbers % 2 === 0)
  .map((squaredNums) => squaredNums ** 2);

console.log(evenSquared);
