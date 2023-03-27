const givenStr = 'aaabbbbcdddd';
let resultStr = '';
let storeStr = givenStr[0];
let count = 0;

for (let element of givenStr) {
    if (element == storeStr) {
        count ++;
    } else {
        resultStr += storeStr + String(count);
        storeStr = element;
        count = 1;
    }
}
resultStr += storeStr + String(count);
console.log(resultStr);

