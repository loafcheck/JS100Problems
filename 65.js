/*

a = [1, 4, 9, 16]
b = [a, b, c, d]
이런 리스트가 있을 때 
[[1, a], [b, 4], [9, c], [d, 16]]
이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.

*/

const a = [1, 4, 9, 16];
const b = ['a', 'b', 'c', 'd'];

let c = a.map(function (element,index) {
    if (index % 2 == 0) {
        return [b[index],element]
    } else {
        return [element, b[index]]
    }

})
console.log(c);

