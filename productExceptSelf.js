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

        }

        // Second Pass
        for (let index = 0; index < nums.length; index++)
        {
            // Edge case 1: Multiple (x>1) Zeroes Found
            if (zeroesFound > 1)
                res[index] = 0; 
            
            // Edge case 2: One (1) zero && curr index num is non-zero
            else if (zeroesFound == 1 && nums[index] != 0)
                res[index] = 0; 

            // No zeroes found in passed array, divide out curr index val
            else if (zeroesFound == 0)
                res[index] = (productOfArray / nums[index]);

            // Else deals with edge case 2, set resultant = total product  
            else    
                res[index] = productOfArray;
        }


    return res;
};