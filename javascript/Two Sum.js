function twoSum(numbers, target) {
  
  let map = {}

  for(let i = 0; i < numbers.length; i++){
    let current = numbers[i]
    let complement = target - current;
    if(map[complement] !== undefined){
      return [map[complement], i]
    }  
    map[current] = i
  }

}