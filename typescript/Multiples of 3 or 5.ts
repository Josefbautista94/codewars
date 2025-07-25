export class Challenge {
  static solution(number: number) {
  if(number < 1) return 0;
  let nums =  Array.from({length :number}).map((_,i)=> i);
  let numFilter = nums.filter((num) => num % 3 === 0 || num % 5 === 0);
  let sum = numFilter.reduce((a,b) => a+b);
  return sum; 
  }
}