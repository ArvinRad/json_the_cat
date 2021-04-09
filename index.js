const breedName = process.argv[2];
const fetchBreedDescription = require('./breedFetcher');

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(`'Fetch error: The requested breed, ${breedName}, is not found.`);
  } else {
    console.log(`The ${breedName} description: ${desc}`);
  }
});