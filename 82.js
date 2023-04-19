// ※ 해설영상에서는 함께 풀이하고 있으니 83번의 답안을 참고하여 주시길 바랍니다. 

function sol(d){
    let step = 0;
    for (let i in d){
        if (d[i] ==="("){
            step += 1;
        } else if (d[i] === ")"){
            step -=1;
        }
    }
    if (step !== 0){
        return false;
    }
    if (step === 0){
        return true;
    } 
}

while (1){
    const n = prompt('데이터 입력(1), 프로그램 종료(2)');
    if (n === '1'){
        const str = prompt('데이터를 입력하세요').split('');
        console.log(sol(str));
    } else{
        break;
    }
}