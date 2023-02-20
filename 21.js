/*
# 문제21 : set은 어떻게 만드나요?

다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};
3)  var x = new Set('javascript');
4)  var x = new Set(range(5));
5)  var x = new Set();

정답: 3,5번
*/

//set은 중복되지 않는 데이터를 저장하는 데이터 구조. 중복되는 거 없음!
const list = [1,2,3,4,5,5,5,5,7,6]
let setVal = new Set(list);
console.log(setVal);