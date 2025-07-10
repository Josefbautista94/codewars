function findShort(s){

  const arr = s.split(" ")
  arr.sort(function(a ,b ){return a.length - b.length});
  
  for(let i = 0; i<arr.length; i++){
    return arr[0].length;
     }

}
