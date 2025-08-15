// 1

let sum = (5 + 5)
let subtraction = (10-5)
let mult = (2 * 4)
let div = (5/10)
let modulo = (5 % 10)
let exponent = (2 ** 5)

// 2

let number1 = (sum += 5)
console.log(number1)
let number2 = (modulo -= 2)

//3 

console.log(sum)
console.log(sum == 15)
console.log(sum === 15)
console.log(mult > 5)
console.log(exponent < 100)
console.log(number1 > number2)

//4 

console.log(div)
console.log(div === 0.6)
console.log(mult != "8")
console.log(mult < 5)
console.log('0.2' == "0.1")
console.log(number1 != sum)


//5

console.log (sum == number1 && 5 == 5)

//6 

console.log (div != 10 || mult == 8)

//7

console.log(15 == "10" && 5 != 10 || 5 == 10)

// 8

console.log(!(20 == "20" && 15 == "15"))

// 9

div == div ? console.log("Hola mundo") : console.log("Hola opps")

// 10

let a = 20000
let b = 50000

console.log((a-b) == (b-a) || (a>b))