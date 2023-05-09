const removeDuplicates = function(s) {
    const stack = [];
    console.log('stack : '+ stack);
    
    for (const element of s) {
        console.log('const element is : '+ element);
        console.log('stack.length : '+ stack.length);

        if (stack.length > 0 && element === stack[stack.length - 1]) {
            stack.pop();
            console.log('stack pop : '+ stack);
        } else {
            stack.push(element);
            console.log('stack push : '+ stack);
        }
    }
    console.log (stack.join(""));
    return stack.join("");
};

removeDuplicates("abbaca");
