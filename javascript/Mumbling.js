function accum(s) {
  
  let newArr = s.toLowerCase().split('');
  let arr2 = [];

  for(let i = 0; i < newArr.length; i++){
    let repeatedChars = newArr[i].repeat(i+1)
    let toUpper = repeatedChars.charAt(0).toUpperCase() + repeatedChars.slice(1) 
    arr2.push(toUpper)
  }

  return arr2.join('-')
  
}
