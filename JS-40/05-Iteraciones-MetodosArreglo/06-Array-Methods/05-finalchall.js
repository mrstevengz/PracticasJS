//Chall 1

const people = [
  {
    firstName: "John Doe",
    lastName: "Doe",
    email: "john@doe.com",
    phone: "1900-2020",
    age: 45,
  },
  {
    firstName: "Jane Doe",
    lastName: "Doe",
    email: "john@doe.com",
    phone: "1900-2020",
    age: 21,
  },
  {
    firstName: "John Doe",
    lastName: "Doe",
    email: "ohn@doe.com",
    phone: "1900-2020",
    age: 95,
  },
  {
    firstName: "John Doe",
    lastName: "Doe",
    email: "john@doe.com",
    phone: "1900-202",
    age: 150,
  },
];

const youngBloods = people
  .filter((people) => people.age >= 25)
  .map((person) => ({
    name: person.firstName + " " + person.lastName,
    email: person.email,
  }));

console.log(youngBloods);

//Chall 2

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
  .filter((posNumbers) => posNumbers > 0)
  .reduce((acc, curr) => (acc += curr), 0);

console.log(positiveSum);

//Chall 3

const words = ["coder", "programmer", "developer"];

const cWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});

console.log(cWords);
