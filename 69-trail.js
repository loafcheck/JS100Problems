/**
 * 100보다 작은 소수를 먼저 구하기
 * 구해진 소수 중에서 소수 + 소수 한 값이 100인것 구기 
 */

let prime = [];
let isPrime = true; 
let value = 100;
let 골드바흐파티션 = [];

for (let i = 2; i < 100; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break; // no need to continue checking j if i is not a prime number
    }
  }
  if (isPrime) {
    prime.push(i);
  }
    isPrime = true; //그래야 if(isPrime)이 true가 되면서 제대로 작동한다.
}
 
for (let n of prime) {
    if (prime.includes(value - n)) {
        골드바흐파티션.push([n , val - n])
    }
}
//만약 100에서 뺀 소수 값이 prime 정렬안에 들어 있다면
console.log(골드바흐파티션);