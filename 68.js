function solution (busTime, currentTime) {
    let answer = [];
    currentTime = currentTime.split(':').map(element => parseInt(element,10));
    currentTime = currentTime[0]*60+currentTime[1];
//currentTime turned into minute
    for (let index in busTime) {
        let busArrival = busTime[index].split(":").map(element=>parseInt(element,10));
        busArrival = busArrival[0]*60 + busArrival[1];
        //whole minute of busArrival Time
        if (busArrival < currentTime) {
            answer.push("The bus has left");
        }else{
            let hour = parseInt((busArrival-currentTime)/60,10);
            let minute = (busArrival-currentTime)%60;
            answer.push(String(hour).padStart(2,'0')+'hour '+String(minute).padStart(2,'0')+'minutes '+'left');
        }
    }
    console.log(answer);
return answer;
}

solution(["12:30", "13:20", "14:13"],"12:40");
