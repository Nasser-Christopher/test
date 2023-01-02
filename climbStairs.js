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
        
    // n >= 3, execute loop logic and modify 'stepTwo' 
    // to be returned later
    for (let i = 3; i <= n; i++)
    {
        let tempVal = stepOne + stepTwo;
        stepOne = stepTwo;
        stepTwo = tempVal;
    }

    // returns default val of 2 if n = 2
    // else, returns modified value done by loop
    return stepTwo;
    
    

};