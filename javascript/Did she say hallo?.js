function validateHello(greetings) {
  greetings = greetings.toLowerCase()
  let words = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
  return words.some(word => greetings.includes(word));
  
}