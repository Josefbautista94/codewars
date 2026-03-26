function trouble(x, t){
  let current = 0
  while(current < x.length - 1){
    if(x[current] + x[current+1]==t){
      x.splice(current+1,1)}
        else{
          current++
        }     
  }
   return x;
}