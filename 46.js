/*
# 문제46 : 각 자리수의 합 2

1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 
모든 자릿수의 총 합을 구하세요. 

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 
101112131415이고 
각 자리의 숫자를 더하면 21입니다. 
(1+0+1+1+1+2+1+3+1+4+1+5 = 21) 

*/

let array = [];
let total = 0;

for (let i = 0 ; i < 20; i++ ) {
    array[i] = i + 1;   
}

console.log (array);

array.forEach((n)=>{
    while(n) {
        total = total + n % 10;
        n = Math.floor (n / 10); 1

    }
});

console.log (total);
/*

n=15
let total = 0;
while(n) {
    console.log('lets check n ' + n);
    total = total + n % 10;
    console.log('total A' +' '+ total);
    n = Math.floor(n/10)
    console.log('total B' + ' '+ n);
}
console.log(total);


 */
//[0] === false 그래서 while loop은 0 일때 false 여서 밖으로 나간다.