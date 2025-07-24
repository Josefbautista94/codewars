export function getSum(a: number, b: number): number {

  let setOfNums : Set<number> = new Set();
  let start = Math.min(a,b)
  let end = Math.max(a,b)
  
  
  do{
    
    setOfNums.add(start)
    start++
    
  }while(start <= end);
  
    let sum = 0;
  
    for(const num of setOfNums){
      
      sum +=num
      
     }
  
  
  return sum
}