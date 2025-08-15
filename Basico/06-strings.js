//Strings

let myName = "Steven"
let greeting = "Hola, " + myName + "!"
console.log(greeting) //Concatenacion de cadenas

//Longitud
console.log(greeting.length) 

//Acceso a caracteres

console.log(greeting[0])

//Metodos comunes

console.log(greeting.toUpperCase()) 
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Steven")) //Indice donde se encuentra la palabra
console.log(greeting.includes("Hola")) //Devuelve un booleano
console.log(greeting.slice(0, 10)) //Devuelve la cadena desde elemento a hasta elemento b
console.log(greeting.replace("Steven", "The Goat"))

//Template literals

let message = `Este es un mensaje
que puede representarse en un cambio de linea`

console.log(`Hola ${message}`) //Interpolacion de variable
