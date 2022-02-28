const fetchBreedDescription = require("../breedFetcher");
const assert = require("chai").assert;

describe("fetchBreedDescription", ()=>{
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {

      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
    
  it("Should return 'Cat not found' for invalid breed and null for description", (done) => {
      
    fetchBreedDescription("abc", (err, desc) => {
      // We expect desc to be null
      assert.equal(desc, null);

      assert.equal(err,"Cat not found");
      done();
    });
  });
    
});
