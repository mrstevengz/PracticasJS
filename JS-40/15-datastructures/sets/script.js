const set = new Set([1, 2, 3, 4]);

set.add(5);
set.has(5); //Regresa un boolean

set.delete(5);

const setArray = Array.from(set);
console.log(setArray);

const iterator = set.values();
console.log(iterator.next());
