function likes(names) {
  // TODO
  
  const ar = [];
  let sentence;
  const arrLength = names.length;
 
  

  
  if(names.length == 0){
sentence = "no one likes this"
  }
  
  if (names.length == 1){
    sentence = names + " likes this"
  }
  
  if (names.length == 2){
  sentence = names[0] + " and " + names[1] + " like this" 
  }
  
  if (names.length == 3){
    sentence = names[0] + ", " + names[1] +  " and " + names[2] + " like this"
  }
  
  if (names.length == 4){
    
    sentence = names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this"
  }
  
  if (names.length >= 4){
    
    sentence = names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this"
  }
  
    
  return sentence;
}