//다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

const nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}

const koreaWidth = nationWidth['korea']
delete nationWidth['korea'];
// console.log(nationWidth); 
//최소값 알고리즘 사용하기

const entry = Object.entries(nationWidth);
//Object.entries 는 빌트인 객체 메서드로 객체를 배열로 반환한다. 
// console.log(entry);
const value = Object.values(nationWidth);
// console.log(value);

//비교할 값 저장
let gap = Math.max.apply(null,value);
// console.log(gap);

let item = [];

for (let i in entry) {
    if (gap > Math.abs(entry[i][1]-koreaWidth)) {
        gap = Math.abs(entry[i][1]-koreaWidth);
        item = entry[i];
    }
}
console.log(item[0],item[1]-koreaWidth);