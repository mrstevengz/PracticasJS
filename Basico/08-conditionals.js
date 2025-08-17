// if, else if, else


let age = 40

if (age > 41) {
    console.log ("La edad es mayor a 41")
}

if (age == 37) {
    console.log("La edad es 37")
} else {
    console.log("La edad no es 37")
}

//Operador ternario
let message = age == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)

//switch

let day = 0
let dayName
switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
    case 2:
        dayName = "Miercoles"
    case 3:
        dayName = "Jueves"
    case 4:
        dayName = "Viernes"
    case 5:
        dayName = "Sabado"
    case 6:
        dayName = "Domingo"
    default:
        dayName = "Numero de dia incorrecto"
}