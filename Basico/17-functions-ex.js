
//1 Funcion de dos numeros que devuelva la suma

function sum (a, b) {
    return a + b
}

//2 Funcion que reciba un arreglo y devuelva el mayor de ellos

function checkHigher (array) {
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max)
            max = array[i]
    } return max;
}


arreglo = [1, 2, 706, 4, 5]
console.log(checkHigher(arreglo));

//3 Funcion que reciba un string y deuelva el numero de vocales

function checkVowels (string) {
    let count = 0
    for (let letra of string) {
        if ("aeiou".includes(letra.toLowerCase())) {
            count += 1;
        }
    } return count;
}

stringEjemplo = "Hola Mundo"
console.log(checkVowels(stringEjemplo))

// 4 Funcion que reciba un array de strings y devuelva el nuevo array con las strings en minuscula

function lowerCaseString(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase();
    }
    return array;
}

const ejemploArray = ["Hola", "Mundo", "JS"];
console.log(lowerCaseString(ejemploArray));

//5 Funcion que reciba un numero y devuelva un booleano true si es primo y viceversa

function checkPrimeNumber(number) {
    if (number %2 == 0) {
        return true;
    } else {
        return false;
    }
}

number = 1;
console.log(checkPrimeNumber(number))

//6 Crea una funcion que reciba dos arrays y devuelva un nuevo array que contenga los elementos en comun entre ambos

function commonElements (array, array2, array3) {

    if (array.length == array2.length) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == array2[i]) {
                array3[i] = array[i]
            } else {
                continue
            } 
        } return array3;
    } 
}

array = [15, 15, 20]
array2= [15, 12, 13]
array3 = []

console.log(commonElements(array, array2, array3))

//7 Crea una funcino que reciba un array de numeros y devuelva la suma de todos los numeros pares

function numPar(array) {
    suma = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] %2 == 0) {
            suma += array[i]
        } 
    } return suma;
} 

array = [1, 2, 3, 10, 5]
console.log(numPar(array))

//8 Crea una funcion que reciba un array de numeros y deulva un nuevo array con cada numero elevado al cuadrado

function squareNum (array) {
    let i = 0
    while (i < array.length) {
        array[i] = Math.pow(array[i], 2)
        i++
    } return array;
}

array = [0, 1, 2, 3]
console.log(squareNum(array))

//9 Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso


function reverseArray(array) {
    for (i = 0; i < array.length; i--) {
        return array[i]
    } return array;  
} 

array = ["Hola", "Mundo"]
console.log(reverseArray(array))

//10 Calcule el factorial de un numero dado

function factorial(numero) {
    let result = 1;
    for (let i = 1; i <= numero; i++) {
        result *= i;
    }
    return result;
}

let numero = 3
console.log(factorial(numero));







