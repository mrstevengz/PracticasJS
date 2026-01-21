const age = 19;

if (age >= 19) {
  console.log("You can vote");
}

age >= 19 ? console.log("You can vote") : console.log("You cannot vote");

//Asignar un valor condicional para una variable

const canVote = age >= 18 ? true : false;

// Multiple statements

const auth = true;

const redirect = auth
  ? (alert("Welcome to the dashboard"), "/dashboard")
  : (alert("Access denied"), "/login");

console.log(redirect);
