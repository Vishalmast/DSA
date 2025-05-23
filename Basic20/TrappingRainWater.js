42. Trapping Rain Water


Logic: For every index, I calculate the highest bar to its left and right. 
The water trapped at that position is the minimum of those heights minus the current height. 
The total trapped water is the sum of these values across the entire array.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxLeft = new Array(height.length);
    let maxRight = new Array(height.length);
    let currHigh = 0;
    for (let i = 0; i < height.length; i++){
        currHigh = Math.max(currHigh, height[i]);
        maxLeft[i] = currHigh;
    }
    currHigh = 0;
    for (let i = height.length -1;i >= 0; i--){
        currHigh = Math.max(currHigh, height[i]);
        maxRight[i] = currHigh;
    }
    let res = 0;
    for (let i = 0; i < height.length; i++){
        const temp = Math.min(maxRight[i], maxLeft[i]);
        res += ((temp-height[i] > 0)? temp-height[i] : 0);
    }
    return res;
};
