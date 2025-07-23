function sumPairs(ints, s) {
  
  const perfectSum = new Set()
  
  for( let num of ints){
    
    let leftOverSum = s - num
    
    if(perfectSum.has(leftOverSum)){
      return [leftOverSum, num]
    }
    perfectSum.add(num)
    
  }
  
  
  return undefined ;
}