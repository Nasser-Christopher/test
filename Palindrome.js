"use strict"

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {

    let maxStart = 0,
        maxEnd = 0;
    
    for (let i = 0; i < s.length - 1; i++)
    {
        for (let isEven = 0; isEven < 2; isEven++)
        {
            let start = i,
                end = i; 
            end += isEven; 

            while (start >= 0 && end < s.length && s[start] == s[end])
            {
            // Keep searching with indices until while statement fails 
            // (with relation to index (i))
            start--;
            end++;
            }
        // Compensate for OOB indices
        start++;
        end--;

        // If New Longest Palindrome larger than old (based on indices)
        if (end - start > maxEnd - maxStart)
            {
            maxStart = start;
            maxEnd = end;
            }
        }
    }
    return s.slice(maxStart, maxEnd+1);
};

/*
// Mocha Setup for Test Cases
var assert = require('assert'); 
const { start } = require('repl');
  describe('1337', function() {
    it('Test Case 1', function() {
        let result = longestPalindrome("babad"),
        expected = "bab";
        assert.equal(result, expected);
     
    
    });
    it('Test Case 2', function() {
        let result = longestPalindrome("abbc"),
        expected = "bb";
        assert.equal(result, expected);
    });
    it('Test Case 3', function() {
        let result = longestPalindrome("ac"),
        expected = "a";
        assert.equal(result, expected);
    });
  });
  */