function findOutlier(integers){
  
  let answer1=[]
  let answer2=[]
  
  for(let i = 0; i < integers.length; i++){
      if(integers[i] % 2 === 0){
        answer1.push(integers[i]);
      }
      if(integers[i] % 2 !== 0){
        answer2.push(integers[i])
        }
          }
  
   if(answer2.length > answer1.length){
   return answer1[0]
 }
  if(answer1.length > answer2.length){
    return answer2[0]
    }
}
