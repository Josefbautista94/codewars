function friend(friends){
  console.log(friends)
  
  let answer = [];
  
  for( let i = 0; i < friends.length; i ++){
  if(friends[i].split('').length == 4){
    answer.push(friends[i])
  }
  }
  
  
  return answer;
  
  
}
