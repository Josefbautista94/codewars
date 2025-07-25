export function parseF(s:string): number|null {
  const num = Number(s);
  return isNaN(num) ? null : Math.round(num * 10) / 10;
}