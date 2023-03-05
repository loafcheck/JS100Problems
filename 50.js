/*

# 문제50 : 버블정렬 구현하기

버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 
시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.


*/

function bubble(arr) {
  let result = arr.slice(); 

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0 ; j < result.length - i ; j++) {
      if (result[j] > result[j + 1]) {
        let value = result[j]
         result[j] = result[j+1]
         result[j+1] = value
      }
    }
  }
  return result;
}

const items = "9 5 1 2 6 7".split(' ').map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));

//undefined 는 undefined 이다. 언디파인은 데이터타입이 언디파인형이다. 
//숫자와 숫자가 아닌것을 비교할때 연산자는 false를 반환한다.
/*
if (result[j] > result[j + 1]) {
        let value = result[j]
         result[j] = result[j+1]
         result[j+1] = value
      }
>>result[6]번째가 undefined여도 괜찮은 이유!
*/