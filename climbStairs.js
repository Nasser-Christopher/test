/*
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let distinctMoves = [];

    // n = 1
    if (n == 0)
        return 1;

    if (distinctMoves[n] != 0)
        return distinctMoves[n];

    return distinctMoves[n] = climbStairs(n-1) + climbStairs(n-2);

    

};