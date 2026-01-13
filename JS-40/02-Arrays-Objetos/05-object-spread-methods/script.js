const todo = new Object();

todo.id = 1;
todo.name = 'Juan Perez'
todo.completed = false;

let x = todo;

const person = {
    address:{
        lat: 42.9384,
        lng: -72.454
    },
}

const obj1 = {a: 1, b: 2}
const obj2 = {c: 2, d: 5}

const obj3 = {...obj1, ...obj2}
const obj4 = Object.assign({}, obj1, obj2);

x = obj4;

const todos = [
    {id: 1, name: 'Buy Milk'},
    {id: 2, name : 'Pickup kids from school'},
]

x = todos[1].id

x = Object.keys(todo);

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = Object.hasOwn(todo, 'name')

//Destructuring

const lista = {
    id: 1,
    title: "Take out trash",
    user: {name: 'Steven',}
};

const {id: todoID, title, user: {name}} = lista;

console.log(todoID);


//Deestructurar arreglos

const numeros = [23, 67, 33, 49]

const [first, second, ...resto] = numeros

console.log(first, second, resto);