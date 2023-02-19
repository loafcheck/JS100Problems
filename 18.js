/*

# 문제18 : 평균 점수

영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요. 
**단, 소숫점 자리는 모두 버립니다.**

입출력

입력 : 20 30 40
출력 : 30

*/

const score = prompt().split(" ");

let sum = 0;

for (let i = 0; i < score.length; i++) { 
    sum = sum + parseInt(score [i],10);
}
console.log(Math.floor(sum/score.length));

//Math.floor: 주이진 값보다 이하의 가장 큰 정수를 반환합니다. 
/*The Math.floor() static method always rounds down 
and returns the largest integer less than or equal to a given number.
console.log(Math.floor(5.05));
// Expected output: 5

console.log(Math.floor(5));
// Expected output: 5

console.log(Math.floor(-5.05));
// Expected output: -6
*/
//The parseInt() function parses a string argument and returns an integer 
//parseInt(문자열,몇진수) >>parseInt(score [i],10) 스코어 십진수로 해달라~