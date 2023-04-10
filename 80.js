function solution (givenArr, givenNum) {
    let combination = [];
    const f = (prefix, givenArr)=>{
        for (let i = 0 ; i < givenArr.length ; i++) {
            combination.push(prefix+givenArr[i]);
            f(prefix+givenArr[i],givenArr.slice(i+1))
        }
    }
    f("",givenArr);

    console.log(combination);

    const answer = combination.filter(x=>x.length === givenNum);
    console.log(answer);
    return answer.length;
}



const givenArr = ['a','b','c'];
const givenNum = 3;

console.log(solution(givenArr, givenNum));