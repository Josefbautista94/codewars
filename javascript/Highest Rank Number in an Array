function highestRank(arr){
  
  let counter = 0;
  let mf =  1;
  let answer ;
  
  for(let i = 0; i < arr.length; i++){
    for(let j = i; j < arr.length; j++){
      if(arr[i] == arr[j])
        counter++
      if(mf<counter){
        mf = counter;
        answer = arr[i]
      }
    }
    counter = 0;
  }
  
  return answer;
  
}
