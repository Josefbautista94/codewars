export function sumPairs(ints: number[], s: number): [number, number] | void {

  const answer = new Set<number>();
  
  
  for (let num of ints){
    const secNum = s - num;
    
    if(answer.has(secNum)){
      return [secNum, num]
    }
    answer.add(num)
  }
  return;
}