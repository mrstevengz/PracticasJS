const library = [
    {
        title: 'Azul',
        author: 'Ruben Dario',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    
     {
        title: 'Azul2',
        author: 'Ruben Dario2',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },

     {
        title: 'Azul3',
        author: 'Ruben Dario3',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    }
]

console.log(library);

//Having read the books, now edit them

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

//Deestructurar el primer arreglo y cambiar la variable

const {title: firstBook} = library[0];
console.log(library, firstBook);

//JSON String

const jString = JSON.stringify(library)
console.log(jString);