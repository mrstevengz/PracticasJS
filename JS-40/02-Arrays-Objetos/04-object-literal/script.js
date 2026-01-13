let x;

const person = {
    name:'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main',
        city: 'Boston',
        state: 'MAIN'
    },
    hobbies: ['music', 'sports']
}

//Maneras de acceder a un objeto y su contenido
x = person.name;
x = person['age']
x = person.address.state
x = person.hobbies[1]

//Maneras de modificar un objeto (valores)
person.name = 'Jane Doe'
person['isAdmin'] = false;
person.marritalStatus = 'S'
delete person.age;

//Se pueden crear funciones dentro del objeto
person.greet = function() {
    console.log(`Hola, mi nombre es ${this.name} `);
}
person.greet();

x= person;

console.log(x);
