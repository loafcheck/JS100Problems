/*
# 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입출력

입력 : 거꾸로
출력 : 로꾸거

배열에서는 reverse함수가 있다.
문자열을 배열로 바꾸려면 split함수를 사용하자
배열을 문자열로 바꾸려면 join()
*/

var str = "거꾸로";

console.log(str.split('').reverse().join(''));