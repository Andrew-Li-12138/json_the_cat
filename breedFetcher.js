const request = require("request");
const CatUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breedName = process.argv[2];

const breedFetcher = function(breed) {
  request(`${CatUrl}${breed}`, (error, response, body) => {
    //handling error when request is not successful
    if (error) {
      console.log('statusCode:', response && response.statusCode);
      console.log(`${CatUrl}${breed} is an invalid URL`);//telling user URL is invalid
      console.log(error); //Print the atual error message
      return;
    }
    //change JSON-formatted string to JavaScript object (note in this case it returns an array with objects in)
    const data = JSON.parse(body);
    //print out error message when breed is not found
    if (data.length === 0) {
      console.log(`breed ${breed} is not found in our database`);
      return;
    }
    //Access the first entry in the data array and print out the description for the use
    console.log(data[0]["description"]);

  });
};

breedFetcher(breedName);