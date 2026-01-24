for (let i = 0; i <= 100; i++) {}

// Nest Loops

for (let i = 1; i <= 10; i++) {
  console.log("Number " + i);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//Loopear un array

const names = ["Steven", "Duncan"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//Break y continue

for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log("Exiting the system....");
    break;
  }

  console.log(i);
}

for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log("Skipping 13...");
    continue;
  }

  console.log(i);
}
