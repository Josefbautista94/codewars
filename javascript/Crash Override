function aliasGen(first, last){
  
  if(typeof first !== "string" || typeof last !== "string"){
    return "Your name must start with a letter from A - Z."; 
  }
  
  let firstLetter = first.charAt(0).toUpperCase();
  let lastLetter = last.charAt(0).toUpperCase()
  
  if(!/^[A-Z]$/.test(firstLetter) ||!/^[A-Z]$/.test(lastLetter)){
    return "Your name must start with a letter from A - Z."; 
  }
  
  return firstName[firstLetter] + " " + surname[lastLetter]
}
