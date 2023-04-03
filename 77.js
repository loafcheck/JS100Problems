function sol (string) {
    let result = [];
    for (let i = 1 ; i <string.length + 1 ; i++ ) {
        for (let j = 0 ; j < i ; j++) {
            result.push(string.slice(j,j+string.length+1-i));
        }
    }
    return result;
}

let wordOne = 'rat';
let wordTwo = 'at';

let wordOneArray = sol(wordOne);
let wordTwoArray = sol(wordTwo);

let intersection = wordOneArray.filter(x => wordTwoArray.includes(x));
let answer = intersection.sort((a,b)=>{b-a});
console.log(answer[0]);
console.log(answer[0].length);




