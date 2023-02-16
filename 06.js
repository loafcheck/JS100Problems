/**
# 문제6 : False

다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
앗, False로 취급하지 않는 것이 하나 있네요! **True를 찾아주세요.**

1)  NaN
2)  1
3)  ""
4)  0
5)  undefined

 */
console.log(!1234);
//자바스크립트에서 숫자는 truthy 값

console.log(!0);
// 0 은 falsy

console.log(!'');
//빈문자열도 falsy

console.log(isNaN(1));
//이것이 숫자가 아닌것이 맞니? false

console.log(isNaN("abcd"));
 //이것이 숫자가 아닌것이 맞니? true

 console.log(!false);
 //false 는 falsy 값

 console.log(!null);
 //null -> falsy 값

 console.log(!undefined);
 // undefined -> falsy

 //정답 2번