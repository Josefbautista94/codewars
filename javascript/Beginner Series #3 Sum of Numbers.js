function getSum(a, b){
  let startNum = Math.min(a,b);
  let endNum = Math.max(a,b);
  const n = endNum - startNum + 1;
  return ( n * (startNum + endNum)/2);
}