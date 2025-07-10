function pigIt(str){
  
  let s = str.split(' ')
  let arr =[];
 
  for(let i = 0; i < s.length; i ++){

    if(s[i].length >= 1 && s[i] !== '!'&& s[i] !== '?'){
    let end = s[i].slice(0,1) + 'ay';
       arr.push(s[i].slice(1)+ end);
    }
    
  }
  
    if(s[s.length-1] == '!' || s[s.length-1] == '?' ){
     arr.push(s[s.length-1]);
   }
  
  let answer = arr.join(' ');

  return answer;

  }
