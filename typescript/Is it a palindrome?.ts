export function isPalindrome(x: string): boolean {
  const spl : string[] = x.split('')
  const rev : string[] = spl.reverse()
  const word : string = rev.join('')

  return x.toLowerCase() === word.toLowerCase() ? true : false;
}