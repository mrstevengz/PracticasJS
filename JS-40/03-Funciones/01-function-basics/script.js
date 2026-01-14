function sayHello() {
    console.log("Hello World");
}

sayHello();

function add(num1, num2) { //Parametros de la funcion
    console.log(num1 + num2);
}

add(5, 10);

function subtract(num1, num2) {
    return num1 - num2;
}

console.log(subtract(10,2));

//Parametros por defecto
function registerUser(user = 'Bot') {
    // if (!user) {
    //     user = 'Bot'
    // }


    return user + ' is registered';
}

console.log(registerUser());

//Rest Params

function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num
    }

    return total;
}

console.log(sum(1, 2, 3));

//Objetos como params

function loginUser(user) {
    return `The user ${user.name} with the ID of ${user.id} is logged in`
}

const user = {
    id: 1,
    name: 'Steven',
};

console.log(loginUser(user));

console.log(loginUser({
    id: 2,
    name: 'Steven'
}));

//Arrays as params

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random()* arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom([1,2,3,4,5,6,7,8])