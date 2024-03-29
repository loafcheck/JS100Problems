// # 문제62 : 20190923출력하기

// `20190923`을 출력합니다.  아래 기준만 만족하면 됩니다.

// 1. 코드 내에 숫자가 없어야 합니다.
//     - 예) console.log(20190923)이라고 하시면 안됩니다.
// 2. 파일 이름이나 경로를 사용해서는 안됩니다.
// 3. 시간, 날짜 함수를 사용해서는 안됩니다.
// 4. 에러 번호 출력을 이용해서는 안됩니다.
// 5. input을 이용해서는 안됩니다.

let resultStr = '';
const count = 'aacdddddddddfffffffffgghhh';

console.log (
    `${count.match(/a/g).length}
    ${Number(count.match(/b/g))}
    ${count.match(/c/g).length}
    ${count.match(/d/g).length}
    ${Number(count.match(/e/g))}
    ${count.match(/f/g).length}
    ${count.match(/g/g).length}
    ${count.match(/h/g).length}`
)
console.log (
    `${count.match(/a/g).length}${Number(count.match(/b/g))}${count.match(/c/g).length}${count.match(/d/g).length}${Number(count.match(/e/g))}${count.match(/f/g).length}${count.match(/g/g).length}${count.match(/h/g).length}`
)