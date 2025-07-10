function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  let newArr = [];
  for(let i = 0; i < numbersArray.length; i++) {
    if(numbersArray[i] % 2 === 0) newArr.push(numbersArray[i]);
  };
  return newArr;
}
