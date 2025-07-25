function solution(str, ending){
  const strSplit = str.split('');
  const endingSplit = ending.split('');
  const endingOfStr = strSplit.slice(-endingSplit.length)
  return endingSplit.every((chars,index) => chars === endingOfStr[index])
}