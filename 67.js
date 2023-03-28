function solution (handshake) {
    let numberOfPpl = 0;
    let totalHandshake = 0;
    let temp = 0;

    while (true) {
        totalHandshake = parseInt((numberOfPpl*(numberOfPpl-1)/2),10);
        if(handshake < totalHandshake ) {
            break;
        }
        numberOfPpl += 1;
        temp = totalHandshake;
        
    }

    return [(handshake-temp),numberOfPpl]
}

const handshake = 59;
console.log(solution(handshake));