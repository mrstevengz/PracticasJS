const matrix1 = [2e3, -3e3, 0.5e3];
const matrix2 = [-1, 0.8, -3];

function cross_product_force(vectorA, vectorB, charge) {
  let vectorACharge = [];
  //Multiplicar cada componente de Vector A por la carga establecida
  vectorA.forEach((component) => {
    vectorACharge.push(component * charge);
  });

  force_vector = cross_product(vectorACharge, vectorB);

  return force_vector.map((val) => parseFloat(val.toFixed(3)));
}

function cross_product(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    -(a[0] * b[2] - a[2] * b[0]),
    +(a[0] * b[1] - a[1] * b[0]),
  ];
}

function magnitude(force_vector) {
  const mag = force_vector.reduce((sum, element) => sum + element ** 2, 0);

  return Math.sqrt(mag);
}

//Escenario 1
let vector_fuerza = cross_product_force(matrix1, matrix2, -10e-6);
console.log(
  `El vector fuerza es: <${vector_fuerza}> N y su magnitud es: ${magnitude(vector_fuerza).toFixed(4)}`,
);

//Escenario 2

function cross_product_length(positionA, positionB, vectorB, charge) {
  const length = positionA.map((element, i) => positionB[i] - element);

  return cross_product_force(length, vectorB, charge);
}

const positionA = [-7, 4, 5];
const positionB = [8, 0, -4];
const matrixNew = [0.8, 4, -2];

let vector_fuerza2 = cross_product_length(positionA, positionB, matrixNew, 20);

console.log(
  `El vector fuerza es: <${vector_fuerza2}> N y su magnitud es : ${magnitude(vector_fuerza2).toFixed(4)} `,
);
