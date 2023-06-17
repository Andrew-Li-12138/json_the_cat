
  const { fetchBreedDescription } = require('./breedFetcher');

  const breedName = process.argv[2];

  const messageHandler = function (error, desc, fullUrl) {
    if (error) {
      console.log(`Error fetch details for: ${fullUrl} \n`, error);
    } 
    if (desc) {
      console.log(desc);
    }
  }
  
  fetchBreedDescription(breedName, messageHandler);