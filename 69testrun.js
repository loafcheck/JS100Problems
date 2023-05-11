let prime = [];
let isPrime = true; 
let value = 20;
let 골드바흐파티션 = [];

for (let i = 2; i < value; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break; // no need to continue checking j if i is not a prime number
    }
  }
  if (isPrime) {
    prime.push(i);
  }
    isPrime = false; //그래야 if(isPrime)이 true가 되면서 제대로 작동한다.
}
console.log(prime);