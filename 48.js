/*

# 문제48 : 대소문자 바꿔서 출력하기

문자열이 주어지면 대문자와 소문자를 바꿔서 
출력하는 프로그램을 작성하세요.

입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD

*/
let arr = [];
const str = "AAABBBcccddd"
for (let i = 0 ; i < str.length ; i ++){
    if (str[i] === str[i].toUpperCase()) {
        arr.push(str[i].toLowerCase());
    } else {
        arr.push(str[i].toUpperCase());
    }
}
console.log(arr.join(''));
