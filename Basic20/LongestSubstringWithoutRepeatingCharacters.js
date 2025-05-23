3. Longest Substring Without Repeating Characters

Logic: I use a sliding window to maintain the set of unique characters. 
If I see a duplicate, I shrink from the left until the window is valid again

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0;
    let j = 0;
    let visited = {};

    for (let i = 0; i< s.length; i++){
        visited[s[i]] = (visited[s[i]] || 0) +1;
        while (visited[s[i]] > 1){
            visited[s[j]] -= 1;
            j++;
        }
        res = Math.max(res, i-j+1);
    }

    return res;
};
