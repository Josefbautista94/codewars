function checkRoot(string){

    const arr = string.split(',')
    const isNum = arr.every(s => s.trim() !== "" && !isNaN(s));
      
      if(arr.length !== 4) return 'incorrect input'
      if(!isNum) return 'incorrect input'
      
      for(let i =0; i <arr.length - 1; i++){
        if(Number(arr[i])+1 !== Number(arr[i + 1])){
        return 'not consecutive';
        }
      }
      
      let product = 1;
      for(let i =0; i < arr.length; i++){
        product *= Number(arr[i])
        
      }
      
      const result = product + 1
      const root = Math.sqrt(result)
       
       return `${result}, ${root}`
      }