reverse = function(array) {  
  let newArr = []
  
  while(array.length){
    newArr.push(array.pop());
  }
  
    return newArr;
}
