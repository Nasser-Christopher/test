/*
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let resultant = 0,
        iterate_x = x;
    
    while (iterate_x > 0) {
        resultant *= 10;
        resultant += iterate_x % 10;
        iterate_x = Math.floor(iterate_x/10)
    }


    return resultant == x;
};

/*
// Mocha Setup for Test Cases
var assert = require('assert'); 
const { start } = require('repl');
  describe('1337', function() {
    it('Test Case 1', function() {
        let result = isPalindrome(121),
        expected = true;
        assert.equal(result, expected);
     
    
    });
    it('Test Case 2', function() {
        let result = isPalindrome(-121),
        expected = false;
        assert.equal(result, expected);
    });
    it('Test Case 3', function() {
        let result = isPalindrome(10),
        expected = false;
        assert.equal(result, expected);
    });
  });
  */