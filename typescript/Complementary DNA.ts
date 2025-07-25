export class Kata {
  static dnaStrand(dna: string) {
  return dna.split('').map((char)=> char ==="A"? "T" : char === "T" ? "A" : char === "C" ? "G" : char === "G" ? "C" : "?" ).join('')
  }
}