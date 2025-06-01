150. Evaluate Reverse Polish Notation

/**
 * @param {string[]} tokens
 * @return {number}
 */

 const util = function(a, b, operator){
    a = parseInt(a, 10);
    b = parseInt(b, 10);
    if (operator === "+") return a + b; 
    if (operator === "-") return a - b; 
    if (operator === "*") return a * b; 
    if (operator === "/") return Math.trunc(a / b); 
 }

var evalRPN = function(tokens) {
    let stack = [];

    for (let token of tokens){
        console.log(stack)
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(util(b, a, token));
        }

        else stack.push(token);
    }
    console.log(stack);
    return parseInt(stack[0], 10);


};
