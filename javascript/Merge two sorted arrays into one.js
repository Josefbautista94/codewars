function mergeArrays(arr1, arr2) {
  let c  = arr1.concat(arr2);
  c.sort(function(a,b){
  return a-b});
  
  return [... new Set(c)];
}
