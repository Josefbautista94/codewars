function toCamelCase(str){
  
  const search = '-'
  const replace = ''
  let result1  = str.split('-').join(' ');  
  let result2 = result1.split('_').join(' '); 
  let newArr = result2.split(' ');
  let answer = [newArr[0]];


  for( let i = 1; i < newArr.length; i++ ){
    
  let toUpper = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
  answer.push(toUpper);
    
  }
  
  return answer.join('');
}
