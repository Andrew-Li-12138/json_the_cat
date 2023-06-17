const request = require("request");
const CatUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';


const fetchBreedDescription = function(breed, callback) {
  request(`${CatUrl}${breed}`, (error, response, body) => {
    const fullUrl = `${CatUrl}${breed}`
    //handling error when request is not successful
    if (error) {
      callback(error, null, fullUrl)
      return;
    }
    //change JSON-formatted string to JavaScript object (note in this case it returns an array with objects in)
    const data = JSON.parse(body);

  //print out error message when breed is not found
  if (data.length === 0) {
     const invalidBreed = `${breed} breed is not found`
      callback (invalidBreed, null, fullUrl);
    return;
  }
  
    //Access the first entry in the data array and print out the description for the use
    callback(null, data[0]["description"], null)

  });
};

module.exports = { fetchBreedDescription };