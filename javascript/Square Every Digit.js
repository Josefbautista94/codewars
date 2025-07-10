function squareDigits(num){
  let newArr = num.toString().split('').map(Number)
  let final = []
 for(let i = 0; i< newArr.length; i++ ){
   final.push(newArr[i] * newArr[i]);
 }
  let a = Number(final.join(''))

  return a
}
