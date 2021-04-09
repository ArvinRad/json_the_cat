// A function for finding a cat breed description from the API: https://api.thecatapi.com

const  fetchBreedDescription = (breed, callback) => {
  const request = require('request');
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (body.length < 3) {
      desc = "";
      err = true;
    } else {
      desc = JSON.parse(body)[0].description;
      err = false;
    }
    callback (err, desc);
  });
};
module.exports = fetchBreedDescription;