// # 문제59 : 빈칸채우기

// 총 문자열의 길이는 10으로 제한하고 
// 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 
// 나머지 빈 부분에는 '='을 채워 넣어주세요.


const word = 'hello';

const n = 5 + parseInt((word.length/2),10);
const left = word.padStart(n,'=');

const right = left.padEnd(10,'=');

console.log(right);