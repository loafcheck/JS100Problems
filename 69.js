
let primeArr = [];
let isPrime = true;

for (let i = 2 ; i < 100 ; i++ ) {
    for (let j = 2; j <i ; j++) {
        if (i%j == 0) {
            isPrime =false;
        }
    }
    if (isPrime) {
        primeArr.push(i);
    }
    isPrime = true;
}
console.log(primeArr)

let evenNum= 50;
let Goldbach = [];

for (let element of primeArr) {
    if (primeArr.includes(evenNum - element) && element <= (evenNum-element)) {
        {
        Goldbach.push([element,evenNum-element])
        }
    }
}
console.log(Goldbach);

let difference = Goldbach.map(element => element[1]-element[0]);
let smallestD = Goldbach[difference.indexOf(Math.min.apply(null,difference))];
let biggestD = Goldbach[difference.indexOf(Math.max.apply(null,difference))];

console.log (smallestD);
console.log (biggestD);

