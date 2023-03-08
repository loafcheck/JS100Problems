function mergeSort(arr){
  console.log ('arr is =' + arr)
    if (arr.length <= 1){
      console.log('return arr' + arr);
      return arr;
    } 
      console.log ('if가아님' + arr)
    
      const mid = Math.floor(arr.length / 2);
      console.log('mid = '+ mid);
      const left = arr.slice(0,mid);
      console.log('left = '+ left);
      const right = arr.slice(mid);
      console.log('right = ' + right);
    
    
    console.log('🔥mergeSort(left)='+ mergeSort(left));
    console.log('🔥mergeSort(right)='+ mergeSort(right));
  
    return merge(mergeSort(left), mergeSort(right)); 
    
  }


  function merge(left, right){
    console.log('⭐️mergeSort(left)='+ mergeSort(left));
    console.log('⭐️mergeSort(right)='+ mergeSort(right));
    console.log('지나칩니까?');
    let result = [];
    console.log('merge함수에서 left='+left);
    console.log('merge함수에서 right='+right);
  
    while (left.length && right.length){
      console.log('while left.length && right.length');
      if (left[0]<right[0]){
        result.push(left.shift());
        console.log('left.length && right.length LEFT result ' + result)
      } else {
        result.push(right.shift());
        console.log('left.length && right.length RIGHT result' + result)
      }
    }
    while (left.length) {
      console.log('while left.length');
      result.push(left.shift());
      console.log('left.length'+result);
    }
    while (right.length) {
      console.log('while right.length');
      result.push(right.shift());
      console.log('right.length'+result);
    }
  console.log('요기오긴오니?');
  console.log('⛅️요기오긴오니 result'+ result)
    return result;
  }
  
  const array = '6 3 1 7'.split(' ').map(n => parseInt(n, 10));
  
  console.log('This if final' + mergeSort(array));