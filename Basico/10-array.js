// Estructuras de datos

//arrays

let myArray = []
let myArray2 = new Array()

myArray = [1, 2, 3] 
myArray2 = new Array(3)

//Metodos comunes

myArray.push("Steven")
myArray.push("Hola")

myArray.pop()

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Hola", "Mundo")

// length

console.log(myArray.length())

// clear

// myArray = [] Limpia el arreglo

myArray.length = 0
console.log(myArray)

//slice

myArray2 = ["Hola", "Mundo", "Brotato", "Brotein Shake"]

let newArray2 = myArray2.slice(1,3) // Los numeros es el rango que toma en cuenta para dividir el arreglo, sin embargo, no toma en cuenta el ultimo indice
console.log(newArray2)

// splice

myArray.splice(1, 3) // El primer numero es el indice donde empieza, y el siguiente es cuantos elementos elimina a partir de ese punto
