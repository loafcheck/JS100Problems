const givenStr = 'aaabbbbcdddd';
let resultStr = '';
let storeStr = givenStr[0];
let count = 0;

for (let element of givenStr) {
    if (element == storeStr) {
        count ++;
    } else {
        resultStr += storeStr + count;
        count =1;
        storeStr = element;
    }
}
console.log(resultStr);
