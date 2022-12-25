/*
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let LowestFound = 0, SellingDiff = -1;


    for (let index = 0; index < prices.length; index++)
    {
        // If index @ pos 0, populate LowestFound
        if (index == 0)
            LowestFound = prices[index];


        // Always check for lowest encountered
        if (prices[index] <= LowestFound)
        {
            LowestFound = prices[index];
        }

        // Finding Maximum SellingDiff possible
        if ((prices[index] - LowestFound) > SellingDiff)
        {

        SellingDiff = prices[index] - LowestFound;

        }

    }
    
    // Return 0 if not possible to make profit
    if (SellingDiff <= 0)
        return 0;
    else
        return SellingDiff;

};