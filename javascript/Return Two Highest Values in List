function twoHighest(arr) {

  let emArr =[]
  let sorted = arr.sort(function(a,b) {
     return a-b;                             
                                  });
  let newArr = [...new Set(sorted)]
  
for(let i = 0; i<newArr.length; i++){
     emArr.push(newArr[i])
     }
  
  return emArr.slice(-2).reverse()
 
}
