function mathBrackets(arr) {

    let count = 0
 
    for (let i = 0; i < arr.length ; i++) {

        if ( arr[i]==='(' || arr[i]==='[' || arr[i]==='{' ) {
            count++
        }
        if ( arr[i]=== ')' || arr[i]===']' || arr[i]==='}') {
            count--
        }
    }

    if (count != 0) {
        return false;
    }

    let bracket = [];

    for (let i in arr) {  
        console.log(bracket);
        if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[" ) {
            bracket.push("(");
        }
        if (arr[i] === "(" || arr[i] === "}"|| arr[i] === "]" ) {
            if (bracket.length === 0) {   
                return false;
            }
            bracket.pop();
        }
    }
    return true;
}

const n = ']]][[['.split('');
console.log(mathBrackets(n));