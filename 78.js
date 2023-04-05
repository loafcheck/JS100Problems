const user_input = prompt("입력해주세요").split(' ');
const numFood = parseInt(user_input[0],10);
const nthOrder = parseInt(user_input[1],10);

function sol (numFood, nthOrder) {
    let index = 0;
    let q = [];
    for (let i = 0 ; i < numFood ; i++) {
        q.push(i+1);
    
    }
    //q = [1,2,3,4,5,6]

    while (q.length>2) {
        if (index > q.length-1) {
            index -= q.length;
        }
        q.splice(index,1);
        index += nthOrder;
        index -= 1;
    }

    return q;
}

console.log(sol(numFood,nthOrder))