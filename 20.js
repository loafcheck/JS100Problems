/*
# 문제20 : 몫과 나머지

공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.**

입출력

입력 : 10 2
출력 : 5 0
*/

const num = ["7" , "2"];

let quotient = Math.floor(parseInt(num[0],10)/parseInt(num[1],10));
let remainder = parseInt(num[0],10) % parseInt(num[1],10);
console.log(quotient, remainder)