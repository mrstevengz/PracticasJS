let x;

const name = 'Steven';
const age = 30;

x = 'Hola, mi nombre es ' + name + ' y tengo ' + age + ' anyos.'; // Concatenacion tradicional

x = `Hola, mi nombre es ${name} y tengo ${age} anyos.`; // Template literals (plantillas literales)

//Propiedades y metodos

const s = 'Hola Mundo';

x= s.length

x = s[0]; // H

x = s.__proto__;

x = s.toUpperCase(); // HOLA MUNDO
x = s.toLowerCase(); // hola mundo

x = s.charAt(0); // H

x = s.indexOf('a'); // 3

x = s.substring(0,4); // Hola

x = s.slice(0,4); // Hola

x= s.trim();

x = s.replace('Mundo', 'Steven').includes('Steven'); // Hola Steven

x = s.valueOf();

x = s.split(' '); // ['Hola', 'Mundo']


console.log(x);