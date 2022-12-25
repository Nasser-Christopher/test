/*
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let LowestFound = 0, SellingDiff = -1;


    for (let index = 0; index < prices.length; index++)
    {
        // Always check for lowest encountered
        if (prices[index] <= LowestFound || LowestFound == 0)
        {
            LowestFound = prices[index];
        }

        if ((prices[index] - LowestFound) > SellingDiff)
        {

        SellingDiff = prices[index] - LowestFound;

        }

    }
    
    if (SellingDiff <= 0)
        return 0;
    else
        return SellingDiff;

};