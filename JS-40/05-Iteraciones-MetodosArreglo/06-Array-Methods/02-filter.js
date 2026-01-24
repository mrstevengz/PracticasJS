const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// // const evenNumbers = numbers.filter(function (number) {
// //   return number % 2 === 0;
// // });

// // console.log(evenNumbers);

// //Short version

// // const evenNumber = numbers.filter((number) => number % 2 === 0);

// // For Each method
// let numberArr = [];
// numbers.forEach(function (number) {
//   if (number % 2 === 0) {
//     numberArr.push(number);
//   }
// });

// console.log(numberArr);

//Ejemplo de buscar una llave especifica en un objeto
const retailCompanies = companies.filter(
  (company) => company.category === "Retail",
);

// // console.log(retailCompanies);

//Chain map

// const squareandDouble = numbers
//   .map((number) => Math.sqrt(number))
//   .map((sqrt) => sqrt * 2);

//Chaining multiple Array methods

const evenSquared = numbers
  .filter((numbers) => numbers % 2 === 0)
  .map((squaredNums) => squaredNums ** 2);

console.log(evenSquared);
