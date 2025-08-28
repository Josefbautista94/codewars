export function toAlternatingCase(s: string): string {
  return s.split("").map(char =>  char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join("")
}