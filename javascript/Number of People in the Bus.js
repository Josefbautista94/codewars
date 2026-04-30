var number = function(busStops){
  
  let pplOn = 0;
  let pplOff = 0;
  
  for(let i = 0; i < busStops.length; i++){
    pplOn += busStops[i][0]
    pplOff += busStops[i][1]
  }
  
  return pplOn - pplOff;
}