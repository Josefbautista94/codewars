function betterThanAverage(classPoints, yourPoints) {

    let classmates = classPoints.reduce((a,b)=>(a+b)) / classPoints.length;
  
    return yourPoints > classmates ? true : false; 
    }