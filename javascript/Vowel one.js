function vowelOne(s){
  
  let vowels ='aeiouAEIOU'
  let arr = s.split('')
  
  for(let i =0; i < arr.length; i++){
    if(vowels.includes(arr[i])){
      arr[i] = "1"
    }
  else{
    arr[i] = "0"
  }
  }
  return arr.join('')
}