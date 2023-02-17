const level = 3;

for (i = 1 ; i <= level ; i++) {
    let tree= "";

    for (let j = 1 ; j <=level-i ; j++) {
        tree= tree + "0";
    }

    for (let k = 1 ; k <= level-(level-i) ;k++) {
        tree = tree + "*";
    }

    console.log(tree);
}
