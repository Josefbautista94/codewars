export class Kata {
  static squareDigits(num: number): number {
    
    let squared = num.toString().split('').map((numb)=>{
      return Number(numb) ** 2
    }).join('')
  
  return Number(squared)
  }
}