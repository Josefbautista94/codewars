function wordValue(words) {
  
    let results = []
    
    for(let i =0; i< words.length; i++){
      results.push(words[i].split('').filter(c => c !== ' ').map(c => c.charCodeAt(0)-96).reduce((a,b)=> a+b ,0) * (i + 1) )
    }
     return results
  }