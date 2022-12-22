"use strict"
/*
/**
 * @param {string} s
 * @return {number}
*/

 var lengthOfLongestSubstring = function(s) {

    let map = new Map();
    let currentChar = 0;
    let startingPoint = 0;
    let startingWindow = 0;
    let lengthOfLongestSubStr = 0;

    for (let i = 0; i < s.length; i++)
    {
        currentChar = s[i];
        startingPoint = map.get(currentChar);

        if(startingPoint >= startingWindow)
        {
            startingWindow = startingPoint +1;
        }

        map.set(currentChar, i);

        lengthOfLongestSubStr = Math.max(
            lengthOfLongestSubStr,
            i - startingWindow + 1
        )
    };

    return lengthOfLongestSubStr;
    
};

let test1 = "abcbcabc";
let result = lengthOfLongestSubstring(test1);
//console.log(result);


/*
// Mocha Setup for Test Cases
var assert = require('assert') 
  describe('1337', function() {
    it('Test Case 1', function() {
      assert.equal(result, 3);
     // assert.equal(result, 4);
    
    });
  });
*/


