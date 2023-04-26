function math(e){
    const m = {
        ')':'(',
        '}':'{',
    };
    let stack = [];
    
    for (let i=0; i<e.length; i++){
        if (e[i].includes('(') || e[i].includes('{')){
            stack.push(e[i]);
        } else if (m[e[i]]){
            if (stack.length === 0){
      
                return false;
            } else{
                let t = m[e[i]];
                if (t != stack.pop()){
   
                    return false;
                }
            }   
        }
    }
    return stack.length === 0;
   
}
const str = ['{','{']
math(str);