export function hello(name = ''): string {
  return name ==="" ? `Hello, World!` : `Hello, ${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}!` ;
}