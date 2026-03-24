function breachAttempts(hackers, securityLevel, increase) {
  
    let breaches = 0;
  
    for(let i =0; i < hackers.length; i++){
      if(hackers[i] > securityLevel){
        breaches += 1;
      }
      else{
        securityLevel += increase;
      }
    }
    
    return breaches;
    
  }