let totalLand = 5;
let searchArea = 3;
let totalLandMap = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
];

let bombNumber = 0;
let bombNumberArray = [];
 
let horizonInc = 0;
let verticalInc = 0;

for (let horizonInc = 0 ; horizonInc <= totalLand - searchArea ; horizonInc++){
    for ( let verticalInc = 0 ; verticalInc < totalLand - searchArea ; verticalInc++) {
        for ( let i = horizonInc ; i < searchArea - 1 + horizonInc ; i++ ) {
            for ( let j = verticalInc ; j < searchArea -1 + verticalInc ; j++) {
                bombNumber += totalLandMap[i][j];
            }
        }
        bombNumberArray.push(bombNumber);
    }
}

console.log(bombNumberArray);
console.log(Math.max.apply(null,bombNumberArray));