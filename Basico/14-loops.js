// Loops

//for

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// do / while

i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5) 

//for of

myArray = [1, 2, 3, 4]

for (let value of myArray) {
    console.log(value)
} //Puede recorrer cada uno de los valores de la estructura

myString = "Hola, mundo"

for (let letra of myString) {
    console.log(letra)
}

// Buenas Practicas

// break y continue

for (let i = 0; i < 10; i ++) {
    if (i == 5) {
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Hola ${i}`)
}

