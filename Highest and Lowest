function highAndLow(numbers){
  // ...
  console.log(`This is the numbers : ${numbers}`)
  let numSplit = numbers.split(' ');
  let newArr = [];
  let removeS = numSplit.filter((item)=>  {
    return /\S/.test(parseInt(item));
  })
  
  
  for(let i = 0; i< removeS.length; i++){
    newArr.push(parseInt(removeS[i]))
    if(removeS.length == 1){
      newArr.push(parseInt(removeS[0] && removeS[0]))
    }
  }
  
 let sortedArr = newArr.slice().sort(function(a,b) {
        return  a - b;                    
                              })
 console.log(`This is the sorted arr : ${sortedArr}`)
 let answer = sortedArr.splice(-1) + " " + sortedArr[0]
 

 console.log(`This is the answer ${answer}`)

 
 return answer
}
