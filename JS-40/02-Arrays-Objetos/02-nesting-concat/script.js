let x;

const fruits = ['apple', 'bear', 'orange']
const berries = ['strawberries', 'raspberries', 'blueberries']



const allFruits = [fruits, berries]


//Concatenacion de dos arreglos
x = fruits.concat(berries);

//Spread Operator (...) Util para arreglos pero especialmente objetos
x = [...fruits, ...berries]

const arr = [1, 2, [3,4], 5, [6,7], 8]

x = arr.flat();

//Metodos estaticos para el objeto Array

x = Array.isArray(fruits)

x = Array.from('12345')

let a = 1; let b = 2; let c = 3;

x= Array.of(a, b, c)

console.log(x);