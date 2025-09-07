// Funciones

function myFunc() {
    console.log("Hola, funcion")
}

myFunc()

//Funcion con parametros

function myFuncWParams(name) {
    console.log(`Hola ${name}`)
}

myFuncWParams("Steven");

//Funciones anonimas

const myFunc2 = function (name) {
    console.log(`Hola, ${name}`)
}

//Parametros

function sum (a,b) {
    console.log(a + b)
}

sum (10,15)

//Return

function mult (a, b) {
    return a*b
}

console.log(mult(10, 50))


//forEach

myArray = [1, 2, 3, 4, 5]

myArray.forEach((value) => console.log(value))


