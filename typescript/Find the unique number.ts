export function findUniq(arr: number[]): number {
  
    let counts : {[key : number] : number } = {};
    
    for (const num of arr){
      
      counts[num] =(counts[num] || 0) + 1
      
    }
    
    let minNumber = Infinity;
    let answer : number | undefined;
    
    
    for( const key in counts){
      if(counts[key]< minNumber){
        minNumber = counts[key]
        answer = Number(key)
      }
    }
    
    
    return answer!;
    
    }
  
  