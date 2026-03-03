// function getData(endpoint, cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", endpoint);

//   xhr.onreadystatechange = function () {
//     if ((this.readyState === 4) & (this.status === 200)) {
//       cb(JSON.parse(this.responseText));
//     }

//     setTimeout(() => {
//       xhr.send();
//       Math.floor(Math.random() * 3000 + 1000);
//     });
//   };
// }

// //Promises

// const promise = new Promise((resolve, reject) => {
//   //Do some async task
//   setTimeout(() => {
//     console.log("Task Complete");
//     resolve();
//   }, 1000);
// });

// promise.then(() => {
//   console.log("Promise consumed..");
// });

//Other way (Better)

new Promise((resolve, reject) => {
  //Do some async task
  setTimeout(() => {
    resolve({
      name: "Pablito",
      age: 30,
    });
  }, 1000);
})
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promiose has been resolved or rejected");
  });

console.log("Global Scope Test");
