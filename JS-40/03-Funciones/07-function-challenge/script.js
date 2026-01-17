//Challenge 1

function getCelcius(temp) {
  return ((temp - 32) * 5) / 9 + "\xB0" + "C";
}

console.log(getCelcius(100));

const getFahr = (temp) => ((temp - 32) * 5) / 9;

console.log(`The temperature is ${getFahr(32)} \xB0C`);

//Challenge 2

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 3, 4, 5, 6]));

//Challenge 3

(function (length, width) {
  let area = length * width;
  console.log(
    `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`
  );
})(10, 5);
