function removeUrlAnchor(url){
  
  let splitWord = url.split('');
  let answer = "";
  
  for(let i = 0; i < splitWord.length; i++){
    
    if( splitWord[i] == '#'){
      
     answer  += splitWord.slice(0, i).join("");
      
    }
    
  }
  
  if(answer === ''){
    return url;
    }
  
  return answer;
}
