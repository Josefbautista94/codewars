export function duplicateEncode(word: string){
    // ...
  let wordToLower = word.toLowerCase();
  const counts : {[char: string]:number} ={};
  
  for (const char of wordToLower){
    counts[char] = (counts[char] || 0) + 1;
    
  }
   const answer = wordToLower.split('').map(char => counts[char] === 1? '(':')').join('');
    
    return answer;
}