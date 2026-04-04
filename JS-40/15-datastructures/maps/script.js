const myMap = new Map();

myMap.set("name", "John");

const peopleMap = new Map();

peopleMap.set("steven", { phone: "573610400", email: "steven@gmail.com" });

peopleMap.forEach((person) => console.log(person.email));
