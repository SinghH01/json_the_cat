// Import request library
const request = require("request");

//Object to save breeds detail
let breedData = {};

const fetchBreedDescription = function(breed, callback) {

  // Request data from the website
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  
    if (error) {
      callback(error, null);
      process.exit();
    } else {

      breedData = JSON.parse(body); // Convert string to JSON Object

      // If the requested breed is not found
      if (breedData.length > 0) {
        callback(null, breedData[0].description);
      } else {
        callback("Cat not found", null);
        process.exit();
      }
    }
  });
};

module.exports = fetchBreedDescription;