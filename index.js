
  const { fetchBreedDescription } = require('./breedFetcher');

  const breedName = process.argv[2];

  const messageHandler = function (error, desc) {
    if (error) {
      console.log('Error fetch details:', error);
    } 
    if (desc) {
      console.log(desc);
    }
  }
  
  fetchBreedDescription(breedName, messageHandler);