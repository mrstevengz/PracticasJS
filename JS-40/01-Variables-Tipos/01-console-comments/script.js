console.log(100);

console.log('Hola mundo')

console.log(20, "yoooo", true);

const x = 100;

console.log(x);

console.error('Alert')

console.warn('Cuidado')
console.table({name:'YOOO', email: 'TWIN'})

//Grupos en consola
console.group('simple');

console.log(x);

console.error('Alert')

console.warn('Cuidado')

console.groupEnd('simple');

//CSS en consola
const styles = 'padding: 10px; background-color: red;'

console.log('%cHola mundo', styles);