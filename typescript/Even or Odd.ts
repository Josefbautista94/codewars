
// 🧩 Challenge: Even or Odd (Codewars - 8 kyu)
// 🔗 Link: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/typescript
// 📂 Category: Mathematics, Fundamentals

//
// 📝 Description:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
//
// 🧪 Examples:
// describe("Example tests", function() {
//   it("evenOrOdd(1) should return 'Odd'", function(){
//     assert.equal(evenOrOdd(1), "Odd");
//   });



export function evenOrOdd(n:number):string {
  return n % 2 !== 0 ? "Odd" : "Even"
}