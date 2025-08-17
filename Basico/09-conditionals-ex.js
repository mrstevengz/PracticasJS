//1 

let names = "Steven"

if (names = "Steven") {
    console.log(names)
} else {
    console.log("Name is not Steven")
}

//2

let user =  "MrStevenGZ"
let password = "14Noviembre"

if (user == "MrStevenGZ" && password == "14Noviembre") {
    console.log("Bienvenido al sistema")
}

//3

let number = -15

if (number > 0) {
    console.log("El numero es positivo")
} else if (number = 0) {
    console.log ("El numero es 0")
} else {
    console.log("El numero es negativo")
}

//4

let age = 15


if (age > 18) {
    console.log("Puedes votar. Continua e ingresa tus datos")
} else {
    console.log(`Eres menor de edad. Aun no puedes votar. Te faltan ${18 - age} años para votar`)
}

//5 

ageStatus = age >= 18 ? "Adulto" : "Menor"

//6

let mes = "Enero"

if (mes == "Enero" | "Febrero" | "Marzo") {
    console.log("La estacion es Invierno")
} else if (mes == "Abril" | "Mayo") {
    console.log("La estacion es Primavera")
} else if (mes == "Junio" | "Julio" | "Agosto") {
    console.log ("La estacion es verano")
} else if (mes == "Septiembre" | "Octubre" | "Noviembre" | "Diciembre") {
    console.log("La estacion es otoño")
} else (console.log("Escribe un mes valido"))


//7

if (mes == "Enero") {
    console.log("Este mes tiene x dias")
}

//8

let message = "Bonjour"

switch (message) {
    case (message == "Bonjour"):
        console.log("El idioma es frances")
        break
    case (message == "Hola"):
        console.log("El idioma es español")
        break
    case (message == "Hello"):
        console.log("El idioma es ingles")
        break
    default:
        console.log("Ingrese un mensaje de hola en un idioma")
}
