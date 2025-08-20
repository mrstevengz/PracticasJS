// set

let mySet = new Set()

//Inicializar

mySet = new Set(["Steven", "Sequeira", "hola"]) //Para inicializar, debe ir entre corchetes
console.log(mySet)

// Metodos comunes

// add y delete

mySet.add("HolaMundo")

console.log(mySet)

mySet.delete("HolaMundo")
console.log(mySet.delete("HolaMundo"))

// has

console.log(mySet.has("Steven"))

// size

console.log(mySet.size)

// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

//Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

//

mySet.add("Steven") //No admite duplicados, no se puede acceder por indice por ende siempre se puede buscar desde cualquier punto al ser unico (deben ser unicos (no puede tener diferencias))