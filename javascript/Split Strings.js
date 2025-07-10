function solution(str){
  
  let addU = str.length % 2 !== 0 ? str += "_" : "";
  let s = str.match(/(..?)/g);
  let answer = s != null ? s :[];
 
  return answer;
}
