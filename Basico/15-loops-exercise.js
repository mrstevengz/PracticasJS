// 1

let i = 1
while (i <= 20) {
    console.log(i)
    i ++
}

//2

suma = 0
i = 1

while (i <= 100) {
    suma += i // suma = suma + i
    i++
}

console.log(suma)

// 3

i = 1
while (i <= 50) {
    if (i % 2 == 0) {
        console.log(i)
    } i++
} 

//4

let namesArray = ["Steven", "Carlos", "Emanuel"]

for (let names of namesArray) {
    console.log(names)
}

//5

let nameString = "Hola Javascript"

let contador = 0
for (let letra of nameString) {
    if ("aeiou".includes(letra.toLowerCase())) {
        contador += 1
    }
}
console.log(`El numero de vocales en el string "${nameString}" son ${contador}`)

