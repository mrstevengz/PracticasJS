x = Math.floor(Math.random() * 100 + 1)

y = Math.floor(Math.random() * 50 + 1) 

let sumOutput = x + y;
let differenceOutput = x - y;
let productOutput = x * y;
let quotientOutput = x / y;
let rmOutput = x % y;

console.log(`Para los numeros ${x} y ${y}: La suma es de: ${sumOutput}, la resta es de: ${differenceOutput}, el producto es de: ${productOutput}, la division es de: ${quotientOutput} y el restante es de: ${rmOutput}`)
