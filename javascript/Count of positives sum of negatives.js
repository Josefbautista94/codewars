function countPositivesSumNegatives(input) {
  
    if(!input|| input.length ===0 ){
      return []
    }
    
    let posCount = 0;
    let sumNeg = 0;
    
    for(let i = 0; i < input.length; i++){
      if(input[i] < 0){
        sumNeg += input[i];
      }
      if(input[i]>0){
        posCount += 1;
      }
    }
    return[posCount, sumNeg]
  }