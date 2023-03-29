function solution (a,b) {
    let result = [];
    const len = a[0].length;

    if(len == b.length){
        for (let i = 0 ; i < len ; i++) {
            let temp = [];
            for (let j = 0 ; j <len ; j++){
                let x = 0;
                for (let k = 0 ; k <len ; k++){
                    x += a[i][k]* b[k][j]
                }
                temp.push(x)
            }
            result.push(temp);
        }
        return result;
    } else {
        return -1;
    }
}

const a = [[1,2],[2,4]];
const b = [[1,0],[0,3]];

solution(a,b);