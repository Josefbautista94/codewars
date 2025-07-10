function getCount(str) {
  let vowelsCount = 0;
  let newArr = str.split("")
  let vowels = ["a","e","i","o","u"]
  
  for(let i = 0; i< vowels.length; i++ ){
    for(let j = 0; j< newArr.length; j++ ){
      if(vowels[i]==newArr[j])
         vowelsCount++
          }
  }
   return vowelsCount;
}
