/**
Write a javascript program that takes in a string that 
contains a Reverse Polish Notation expression and 
returns the result of the expression. Use your stack 
and queue implementation to help you with the algorithm.

Examples:
    Input: 4 5 *
    Result: 20
    Input: 3 5 10 + * 
    Result: 45

Note: the expression will always have space separated 
      inputs like "4 5 *" rather than "45*" or "4 4*"
 */

function rpn(expression) {
    let expr = expression.split(' ');
    let stack = [];

    if (expr == '') {
        return 0;
    }

    for(let i = 0 ; i < expr.length; i++) {
        if(!isNaN(expr[i]) && isFinite(expr[i])) {
            stack.push(expr[i]);
        }
        else {
            let a = stack.pop()
            let b = stack.pop();
            if(expr[i] === '+') {
                stack.push(parseInt(a) + parseInt(b));
            }else if (expr[i] === '*') {
                stack.push(parseInt(a) * parseInt(b))
            }else if (expr[i] === '-') {
                stack.push(parseInt(a) - parseInt(b))
            }else if (expr[i] === '/') {
                stack.push(parseInt(a) / parseInt(b))
            }
            
        }
    }
    if (stack.length > 1) {
        return "Error";
    }else {
        return stack[0];
    }
}
