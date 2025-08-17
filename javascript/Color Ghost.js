let Ghost = function() {
    // your code goes here
    
    const colors = ['yellow','white','purple','red']
    const random = Math.floor(Math.random() * colors.length)
    this.color = colors[random]
  };