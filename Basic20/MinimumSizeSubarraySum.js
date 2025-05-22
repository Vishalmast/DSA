209. Minimum Size Subarray Sum

General Window approach structure:
let left = 0;
for (let right = 0; right < arr.length; right++) {
    // Expand the window by including arr[right]
    
    while (window condition is satisfied) {
        // Shrink the window from the left
        // Update result if needed
        left++;
    }
}

Logic:
I need to find the smallest subarray whose sum is at least the target. 
Since all elements are positive, I can use a two-pointer approach — expand the window to grow the sum, 
and once it crosses the target, I’ll shrink it from the left to minimize the size. This gives an optimal O(n) solution.

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    var res = Infinity;
    let j = 0;
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++){
        currentSum += nums[i];
        while (currentSum >= target){
            res = Math.min(res, i-j+1);
            currentSum -= nums[j];
            j++;
        }

    }
    return res === Infinity ? 0 : res;
};
