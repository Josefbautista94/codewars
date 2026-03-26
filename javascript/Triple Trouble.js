function tripleTrouble(one, two, three){
  //Solution
  
  let answer = [];
  for(let i = 0; i < one.length; i++){
    answer.push(one[i]+two[i]+three[i])
}    
  return answer.join('')
 }