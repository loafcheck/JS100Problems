/**
 * # 문제57 : 1의 개수

**0부터 1000까지 1의 개수를 세는 프로그램**을 만들려고 합니다. 
예를 들어 0부터 20까지 1의 개수를 세어본다면 
1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 
들어가므로 12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠.

그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.
 * 
for in : loops through the index of an Object
for of : new in ES6, loops through the values of an iterable object.
 */

// 123456789101112

// let s = ''; 
// for (let i = 0 ; i < 12; i++) {
//     s += i;
// }
// console.log(s);

// let count = 0;

//method 1

// for (let k of s) {
//     if (k == 1) {
//         count++;
//     }
// }
// console.log(count);

//method 2

// for (let k in s) {
//     if (s[k] == 1) {
//         count++;
//     }
// }
// console.log(count);

//method 3
// console.log(s.match(/1/g).length);

//method4
const obj = {};
    for(let i = 0; i < 9 ; i++) {
        let tmp = i;
        while( tmp > 0) {
            let num = tmp % 10;
            if(obj[num]) {
                obj[num]++;
            }else {
                obj[num] = 1;
            }
            tmp = parseInt(tmp/10, 10);
        }
    }
    console.log(obj);
    console.log(obj[1]);