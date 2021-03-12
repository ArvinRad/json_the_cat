const address = process.argv;
const request = require('request');
let breed = address[2];
let data = {};
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`${error} - the requested breed is not found.`);
  }
  console.log(data);
});


