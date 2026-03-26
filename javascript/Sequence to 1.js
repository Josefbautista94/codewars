function seqToOne(n){
  
  let arr = []

  if(n >= 1){
    while(n >=1){
      arr.push(n)
      n--
    }
  }
  else{
    while(n <= 1){
      arr.push(n)
      n++
      }
  }
   return arr;
}