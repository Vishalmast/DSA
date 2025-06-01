84. Largest Rectangle in Histogram


/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [];
    let res = 0;
    heights.push(0);
    for (let i = 0; i < heights.length; i++){

        while(stack.length && heights[stack[stack.length-1]] > heights[i]){
            const temp = heights[stack.pop()];
            const left = stack.length ? stack[stack.length-1] : -1;
            const width = i - left - 1;
            res = Math.max(width * temp, res);
        }
        stack.push(i);

    }

    return res;
};
