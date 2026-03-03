fetch("http://httpstat.us/200")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Request Failed");
    }
  })
  .then(() => {
    console.log("sucess");
  })
  .catch((error) => {
    console.log(error);
  });

//   if (!response.ok) {
//     throw new Error('Request Failed')
//   }

//   .catch((error) => {

//   })

async function getPromise() {
  const response = await Promise;
  console.log(response);
}

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
}

//Example of error handling

const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

async function getAllData() {
  const movies = await fetch();
}

async function getAllDataWithFetch() {
  const movieRes = await fetch("./recipes.json");
  const movies = await movieRes.json();
}
