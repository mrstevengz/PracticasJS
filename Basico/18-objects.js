//Objects 

// Sintaxis

let person = {
    name: "Steven",
    age: 37,
    alias: "MrStevenGZ"
}

//Acceso a las propiedades

//Notacion punto

console.log(person.name)

//Notacion de corchetes

console.log(person["name"])

console.log(typeof person, age)
person.age = "40"
console.log(typeof person, age)

delete person.age

person.email = "leonelsteven11@gmail.com"

let person2 = {
    name: "Steven Sequeira",
    age: 18,
    walk: function() {
        console.log("La persona camina")
    }
}

person2.walk()

//Anidacion de objetos

let persona3 = {
    name: "Steven",
    job: {
        name: "Programador",
        exp: "1 año",
        work: function() {
            console.log("La persona trabaja en la empresa")
        }


    }
}

persona3.job.work();

let person4 = {
    name: "Steven",
    age: 37,
    alias: "MrStevenGZ"
}

for (let key in person4) {
    console.log(key + ": " + person4[key])
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person5 = new Person("Steven", 18);
console.log(person5)