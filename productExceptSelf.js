/*
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = Array(nums.length).fill(0);
       
        // TODO: Keep count of TotalProduct and divide it out later

        let zeroesFound = 0;
        let productOfArray = 1;

        // First Pass 
        for (let index = 0; index < nums.length; index++)
        {
            if (nums[index] == 0) // 0 encountered in array
                zeroesFound++;
            else
                productOfArray *= nums[index]; // Save for later

        }

        // Second Pass
        for (let index = 0; index < nums.length; index++)
        {
            // TODO: Check for edge cases (e.g. if val @ curr index = 0)
            // --:If edge case found, make all other results 0 (0*x=0)
        }


         

    return res;
};