function calculateTip(amount, rating) {
  let rl = rating.toLowerCase()
  return rl == 'terrible' ? 0 : rl == 'poor' ? Math.ceil(amount * .05) : rl == 'good'? Math.ceil(amount * .10) : rl == 'great' ? Math.ceil(amount * .15) : rl == 'excellent' ? Math.ceil(amount * .20) : 'Rating not recognised'
  
}