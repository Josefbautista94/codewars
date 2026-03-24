function evil(n) {
  
    let binary = (n).toString(2);
    let counter = binary.split('').filter(n => n === '1').length;
    return counter % 2 == 0 ? `It's Evil!` : `It's Odious!`;
  }