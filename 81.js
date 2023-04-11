let value ="0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"
let sp = value.split('\n');
let count = 0;

for (let i of sp){
  sp[count] = i.replace('1', 'f').split(' ');
  count += 1;
}
console.log("sp : " + sp);
console.log("sp[0] : " + sp[0]);
console.log("sp[1] : " + sp[1]);
console.log("sp[2] : " + sp[2]);
console.log("sp[3] : " + sp[3]);
console.log("sp[4] : " + sp[4]);

count = 0;
let search = 0;

for (let s of sp) {
    console.log("s : " + s) ;
    for (let i of s) {
        if (i === 'f') {
            if (search > 0) {
                s[search-1] = '*';
            }
            if (search < 4) {
                s[search + 1] = '*'
            }
            if (count > 0) {
                sp[count-1][search] = '*'
            }
            if (count < 4) {
                sp[count+1][search] ='*'
            }
        }
        search += 1;
    }
    count += 1;
    search = 0;
} 
console.log(sp);