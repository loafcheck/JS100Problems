
/*
pseudocode
1.get a prompt number
2.change the string number into an array
3.
*/

const stamp = "12345".split("");
// console.log(Number(stamp[1])+1);

function solution (a) {
    for (let i = 0 ; i < a.length-1 ; i++) {
        if (Number(a[i])+1 !== Number(a[i+1])) {
            return "NO"
        }
    }
    return "YES"
}

console.log(solution(stamp));