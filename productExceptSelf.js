/*
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = Array(nums.length).fill(0);
       
        let zeroesFound = 0;
        let productOfArray = 1;

        // First Pass 
        for (let index = 0; index < nums.length; index++)
        {
            if (nums[index] == 0) // 0 encountered in array
                zeroesFound++;
            else
                productOfArray *= nums[index]; // Save for later

            if (zeroesFound > 1) // Early return since answer = 0[x]
                return res;

        }

        // Second Pass
        for (let index = 0; index < nums.length; index++)
        {

            // No zeroes found, so divide out curr index val
            if (zeroesFound == 0)
                res[index] = (productOfArray / nums[index]);

            // Else deals with edge case, set 0 found = total product  
            else if (zeroesFound == 1 && nums[index] == 0)   
                res[index] = productOfArray;
        }


    return res;
};