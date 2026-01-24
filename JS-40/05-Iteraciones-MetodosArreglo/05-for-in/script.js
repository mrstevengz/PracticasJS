const colorObj = {
  color1: "red",
  color2: "blue",
  color3: "green",
  color4: "blueish",
};

for (const key in colorObj) {
  console.log(key);
}

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArray = ["red", "blue", "green"];

for (const key in colorArray) {
  console.log(colorArray[key]);
}
