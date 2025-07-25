export function solution(str: string, ending: string): boolean {
  
  const strSplit = str.split('');
  const endingSplit = ending.split('')
  
 const endOfStr = strSplit.slice(-endingSplit.length)
 
 return endingSplit.every((char,i) => char === endOfStr[i])
 
 }