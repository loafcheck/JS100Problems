function gameSolution (n) {
    let clapCount = 0;
    let constant = 1;
    let obj = { 3:1, 6:2, 9:3}

    while (n.length !== 0) {
        clapCount += obj[parseInt(n.pop(),10)]*constant;
        constant *= 3;
     }

     return clapCount;
}

const userInput = prompt():
const gameInput = userInput.split('')
console.log(gameSolution(gameInput));