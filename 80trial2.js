function combination (chars) {
    let combi = [];
    const f = (prefix, chars) => {
        for (let i = 0; i <chars.length; i++) {
            combi.push (prefix + chars[i]);
            f(prefix + chars[i], chars.slice(i+1))
        }
    }
    f('', chars);
    console.log(combi);
}


let chars = ["a","b","c"]
combination(chars);