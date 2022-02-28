// Import request library
const request = require("request");

// Save search query from terminal input
let array = process.argv.slice(2);
const breed = array[0];

//Object to save breeds detail
let breedData = {};

// Request data from the website
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  
  if (error) {
    console.log(error);
  } else {

    breedData = JSON.parse(body); // Convert string to JSON Object

    // If the requested breed is not found
    if (breedData.length > 0) {
      console.log("Description: ", breedData[0].description);
    } else {
      console.log("Breed Not Found!");
    }
  }
});
