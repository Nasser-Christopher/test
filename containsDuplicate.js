/*
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    // Key will hold Num, Value will hold total Count of Num
    // Map <Key,Value> = <Num,Count>
    let hashMap = new Map();
    let dupeCount = 0;

    // Keep going until end of Nums array
    for (let index = 0; index < nums.length; index++)
    {
         // if duplicate Key found and Value already exists, increase total dupeCount by 1
         if (hashMap.has(nums[index]) && (hashMap.get(nums[index]) > 0))
         {
             dupeCount++; 
         }

        // if a new, unmapped number found...
        if (hashMap.has(nums[index]) == false)
        {
        // add a key entry for it with val = 1
        hashMap.set(nums[index], 1)
        }

    }

    if (dupeCount > 0)
        return true;
    else
        return false;
    
};