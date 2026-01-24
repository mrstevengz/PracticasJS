const arr = ["hola", "mundo", "steven"];

//Manera 1
arr.forEach(function (item) {
  console.log(item);
});

arr.forEach((item, index, array) => console.log(`${index} -- ${item}`, array));

const socials = ["Facebook", "Marketplace", "Living Hellhole"];

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "LinkedIn", url: "https://twitter.com" },
  { name: "Instagram", url: "https://twitter.com" },
  { name: "Ubuntu", url: "https://twitter.com" },
];

socialObjs.forEach((item) => console.log(item.name, item.url));
