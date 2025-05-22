560. Subarray Sum Equals K

Logic:
I'll keep a runningSum while scanning left to right, and store how many times each prefix sum has occurred.
At every step, I check: how many times have I seen (runningSum - k) before?
Because that would mean the subarray between that earlier point and now sums to k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let res = 0;
    let runningSum = 0;
    let prevSumFreq = {0: 1}
    for (let i = 0; i < nums.length; i++){
        runningSum += nums[i];
        const need = runningSum - k;

        res += (prevSumFreq[need] || 0) 
        prevSumFreq[runningSum] = (prevSumFreq[runningSum] || 0) + 1 ;
    }
    return res;
};

