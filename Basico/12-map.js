// Map o Diccionario

let myMap = new Map()

console.log(myMap)

//Inicializar

myMap = new Map( [
    ["name", "Steven"],
    ["email", "ssequeira@uamv.edu.ni"]
    ["age", "18"]
])

console.log(myMap)

// Metodos y propiedades

//set

myMap.set("alias", "mrstevengz")
myMap.set("name", "Steven Sequeira") //Si la clave no existe, se crea una nueva, pero si ya existe la clave, solo se modifica el valor
console.log(myMap)

//get

console.log(myMap.get("name"))

//has

console.log(myMap.has("age"))

//clear

//myMap.clear()

myMap.keys() //Regresa una lista de las claves
myMap.values() //Regresa una lista de los valores
myMap.entries()

console.log(myMap.size())