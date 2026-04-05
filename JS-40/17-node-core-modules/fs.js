const { create } = require("domain");
const fs = require("fs");

//Escribir un archivo

//Callback vers

// fs.writeFile("file1.txt", "HelloWorld", (err) => {
//   if (err) throw err;
//   console.log("File created");
// });

// //Promise version

// fs.writeFile("file2.txt", "Hola Mundo 2")
//   .then(() => console.log("File created"))
//   .catch((err) => console.log(err));

//Sync version

// fs.writeFileSync("file3.txt", "Hola mundo");
// console.log("File created");

//Async/Await

// async function createFile(fileName, content) {
//   try {
//     await fs.writeFile(fileName, content);
//     console.log("File created");
//   } catch (error) {
//     console.log(error);
//   }
// }

// createFile("file4.txt", "yooooo");

//Leer un archivo

async function readFile(fileName) {
  try {
    const data = await fs.readFileSync(fileName, "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

readFile("file3.txt");

//Borrar un archivo

function deleteFile(fileName) {
  try {
    fs.unlinkSync(fileName);
    console.log(`File ${fileName} deleted`);
  } catch (error) {
    console.log(error);
  }
}

deleteFile("file2.txt");
