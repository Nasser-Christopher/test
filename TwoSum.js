"use strict"
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Not working -- needs O{n} logic implemented for finding target
 var mergeTwoSum = function(nums, target) {

    let l = 0;
    let r = nums.length - 1;
    let positions = [0, 0];

function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
  
    // Create temp arrays
    var L = new Array(n1); 
    var R = new Array(n2);
  
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
  
    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray
    var i = 0;
  
    // Initial index of second subarray
    var j = 0;
  
    // Initial index of merged subarray
    var k = l;
  
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
  
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
  
// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr,l, r){
    if(l>=r){
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}

    mergeSort(nums, l , r);

    // TODO: Find target here and return it
    // Using L and R, L++ if value < target
    // and R-- if value > target
   
};

// Fast -- O(n)
    
var MapTwoSum = function(nums, target){
    let hashMap = new Map()

    for (let index = 0; index < nums.length(); index++)
    {
        const currentNum = nums[index];
        if (hashMap[target-currentNum] !== undefined)
        {
            return [hashMap[target-currentNum]
                  , index]; // Index of Answer Targets
        }
        hashMap[currentNum] = index; // Update Hash
    }
    return null; // Target impossible given array.
};

// Slowest -- O(n^2)
var SlowTwoSum = function(nums, target) {

    let positions = [0, 0]
    
    for (let i = 0; i < nums.length; i++)
    {
        for (let j = nums.length; j > i; j--)
        {
            if (nums[i] + nums[j] == target)
            {
                positions = [i, j];
            }
        }

    }
    return positions;
};