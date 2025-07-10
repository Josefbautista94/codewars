function well(x){

  let counter = 0;

  for(let i =0; i< x.length; i++){
    if(x[i] ==="good"){
      counter++;
    }
  }
  if(counter > 2){
    return 'I smell a series!'
  }
  if(counter ===0){
    return 'Fail!'
  }
  return 'Publish!'
}
