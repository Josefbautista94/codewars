var number = function(busStops){
return busStops.reduce((people,[on,off]) =>{
  return people + on - off;
},0)
}