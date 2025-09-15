// 1. Crear objeto con 3 propiedades

let objeto = {
    name: "Gabriela Guerrero",
    age: 17,
    cuteness: "1 GAZILLION"
}

// 2. Acceder y mostrar su valor

console.log(objeto.name)

// 3. Agregar una nueva propiedad

objeto.cat = "Siames"
console.log(objeto);

// 4. Eliminar una de las 3 primeras propiedades

delete objeto.age;
console.log(objeto);

// 5. Agregar una funcion y llamarla
objeto.function = function() {
    console.log("Esta persona es un gatito siames")
}

console.log(objeto.function)

// 6. Iterar en las propiedades del objeto
for (key in objeto) {
    console.log(key + ": " + [objeto[key]])
}

// 7. Crear un objeto anidado
// 8. Acceder y mostrar el valor de las propiedades anidadas
objeto.ocupacion = {
    job: "Jobless",
    job_exp: "None"
}

console.log(objeto.ocupacion)

// 9. Comprobar si dos objetos son iguales
objeto.ocupacion.job == objeto.ocupacion.job_exp ? console.log("Esta persona tiene trabajo") : console.log("Esta persona no tiene trabajo")

// 10. Comprobar si dos propiedades diferentes son iguales.