alert('Hello')
console.log(window.innerHeight, window.innerWidth);

function run() {
    console.log(window.innerHeight);
}

let x = 100;

if (true) {
    console.log(x, 'in block');
}

function add() {
    const y = 50;
    const x = 1; //Variable reemplaza el valor previo adentro de la funcion
    console.log(x + y);
}

add();