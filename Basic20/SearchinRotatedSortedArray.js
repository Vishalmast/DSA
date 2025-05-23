33. Search in Rotated Sorted Array

Logic
Instead of searching linearly or sorting the array, I use a modified binary search because the array is sorted but rotated at some pivot. 
The main idea is that, at any point in the array, at least one half (either left or right) is still sorted in increasing order. 
I can use this property to decide which half to explore next.

At each step, I check whether the left half or the right half is sorted by comparing the values at the current left, middle, and right indices.
If the left half is sorted and the target value falls within the range of this sorted half, I focus my search there. 
If not, I search the right half. Similarly, if the right half is sorted and the target falls within that half, I focus there; 
otherwise, I shift back to the left half. This approach allows me to narrow down the search space efficiently, always discarding the half where the target cannot possibly exist.

  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;

        // Left half is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        }
        // Right half is sorted
        else if (nums[mid] < nums[right]) {
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
        // Ambiguous case for duplicates (LeetCode 81)
        else {
            right--;
        }
    }
    return -1;
};
