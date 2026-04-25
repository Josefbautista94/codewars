// write the function isAnagram
var isAnagram = function(test, original) {
  
  let t = test.toLowerCase()
  let o = original.toLowerCase()
  
  if(t.length !== o.length) return false
  
  let map = {}
  
  for(let char of t){
    map[char] = (map[char] || 0) + 1 
  }
  
  for( let char of o){
    if(!map[char]) return false
    map[char]--
  }
  
  return true
};