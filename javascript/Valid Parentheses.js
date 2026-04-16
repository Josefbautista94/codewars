function validParentheses(parenStr) {
  // Your code here
  
  const stack = [];
  const map = { ')' : '(' }
  
  for( let char of parenStr){
    
    
    if(char in map){
      
      if(stack.length === 0) return false
      
      let top = stack.pop()
    
      if(top !== map[char]){
        return false
      }
    }
    
    else{
      stack.push(char)
    }
    
  }
  return stack.length == 0
}