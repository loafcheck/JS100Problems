/*
var a = 10;
var b = 2;

for(var i = 1 ; i < 5; i= i + 2){
    a = a + i
    a = 10 + 1 // 11
    a = 11 + 3 //14

}

console.log(a+b); 
14 + 2 = 15
*/

var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

console.log(a+b);
