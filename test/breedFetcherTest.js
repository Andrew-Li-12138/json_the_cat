const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc, fullUrl) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  //Scenario where an invalid/non-existent breed is passed in.
  it('returns a error message with URL input for a invalid breed, via callback', (done) => {
    fetchBreedDescription('dog', (err, desc, fullUrl) => {
      // we expect no description prints out
      assert.equal(desc, null);
      // we expect callback prints out correct error message in this scenario
      const errMsg = "dog breed is not found";
      assert.equal(err, errMsg);
      done();
    });
  });
}

);

