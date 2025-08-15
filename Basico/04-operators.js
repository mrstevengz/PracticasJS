// Operadores

// Operador aritmeticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division

console.log(a % b) // Modulo
console.log(a ** b) // Exponente

a++
console.log(a) //Incremento

b--
console.log(b) // Decremento

// Operadores de asignacion

let myVariable = 2 // Simbolo igual
console.log(myVariable)
myVariable += 2 // myVariable = myVariable + 2
console.log(myVariable)

// Operadores de comparacion

console.log(a > b)
console.log(a == b) //Es igual (valor)
console.log(a === 6) // Igualdad por identidad (tipo y valor)
console.log (a == "6") // Igualdad por valor (a pesar de ser string)
console.log(a === 6.5)

console.log (a != 6) // Es distinto que

console.log (0 == false) // 0 es falso, 1... es verdadero
console.log(1 == false)

// Truthy values
//Todos los numeros positivos y negativos menos el cero
//Todos las cadenas del texto menos las vacias
//Todos los booleanos verdaderos

//Falsy values
//0
//null
//undefined
//Nan
//El booleano falso

//Operadores logicos

//and (&&)

console.log(5 > 10 && 15 > 20)

// or (||) Minimo una condicion verdadera

console.log(15 > 20 || 20 > 19)

// not (!)

console.log (!(5 > 10 && 20 > 19))
console.log (!(15 > 20 || 20 > 19))

// Operadores ternarios

const isRaining = true

isRaining ? console.log ("Esta lloviendo") : console.log("No esta lloviendo")




