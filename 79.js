const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const n = parseInt(2,10);

function rotate(a,l){
    let b = a.slice();
    let c = [];

    for (let i = 0; i<l ; i++) {
        b.unshift(b.pop())
    }
    for (let i in a) {
        c.push(Math.abs(a[i]-b[i]));
    }
    let minimum = Math.min.apply(null,c);
    let index = c.indexOf(minimum);
    console.log(index);
    console.log(a[index],b[index]);
}

rotate(l,n);