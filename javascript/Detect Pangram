function isPangram(string){
  
  let l = string.toLowerCase();
  let sp = l.split('').sort();
  let uniqueLetters = [...new Set(sp)];
  let arr = uniqueLetters.filter(function(entry) { return entry.trim() != ''; });
  
  if(arr.length < 26){
    return false;
  }
  
  return true;
  
}
