/*
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = Array.from(nums);

    for (let index = 0; index < nums.length; index++)
    {
        if (res[index] != 0)
        {
            res[index] = (nums.reduce((a,b)=> a*b) / (Math.abs(res[index])));
        }
        else
        {
            res[index] = (nums.filter(n => n > 0).reduce((a,b)=> a*b));
        }


        
         
    }
    return res;
};