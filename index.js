// Import Function
const fetchBreedDescription = require("./breedFetcher");

// Save search query from input
let array = process.argv.slice(2);
const breed = array[0];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(desc);
  }
});