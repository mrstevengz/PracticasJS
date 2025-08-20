//1

listAnimals = ["Gato", "Perro", "Vaca", "Hormiga", "Ballena"]
console.log(listAnimals)

//2

listAnimals.push("Nuevo Elemento")
console.log(listAnimals)
listAnimals.unshift("Primer elemento")
console.log(listAnimals)

//3
listAnimals.splice(2,2)
console.log(listAnimals)

//4

listaLibros = new Set(["Libro 1", "Libro 2", "Libro 3", "Libro 4", "Libro 5"])

//5

listaLibros.add("Libro 6")
listaLibros.add("Libro 5")
console.log(listaLibros)

//6

listaLibros.delete("Libro 2")
console.log(listaLibros)

//7

monthMap = new Map( [
    ["01", "Enero"],
    ["02", "Febrero"],
    ["03", "Marzo"],
    ["04", "Abril"],
    ["05", "Mayo"],
    ["06", "Junio"],
    ["07", "Julio"],
    ["08", "Agosto"],
    ["09", "Septiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
    ["12", "Diciembre"],
])

console.log(monthMap)

//8


if (monthMap.has("05")) {
    console.log(monthMap.get("05"))
}

//9

monthMap.set("mesVerano", ["Junio", "Julio", "Agosto"])
console.log(monthMap)

//10

let arrayEjemplo = ["Hola", "Mundo"]
setEjemplo = new Set(arrayEjemplo)

//Añadir al diccionario

monthMap.clear()
console.log(monthMap)
monthMap.set("arreglo", setEjemplo)
console.log(monthMap)