/*
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    let stepOne = 1;
    let stepTwo = 2;
    
    // n = 1
    if (n == 1)
        return 1;

    for (let i = 3; i <= n; i++)
    {
        let tempVal = stepOne + stepTwo;
        stepOne = stepTwo;
        stepTwo = tempVal;
    }
    return stepTwo;
    
    

};