/*
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = Array.from(nums);

    for (let index = 0; index < nums.length; index++)
    {
        // TODO: Two For loops (not nested), one to iterate, the other to multiply
        // --:In first loop, check for any 0's; if found, zeroesFound++
        // TODO: Check for edge cases (e.g. if val @ curr index = 0)
        // --:If edge case found, make all other results 0 (0*x=0)

        let zeroesFound = 0;

        for (let index = 0; index < nums.length; index++)
        {
            
        }
         
    }
    return res;
};