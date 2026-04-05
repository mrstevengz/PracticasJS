const url = require("url");

const myUrl = url.parse("https://example.com/listing?id=1000&premium=true");

console.log(myUrl);

const myUrl2 = url.format({
  protocol: "https",
  host: "www.example.com",
  pathname: "listing",
  query: {
    id: 1000,
    premium: true,
  },
});

console.log(myUrl2);
