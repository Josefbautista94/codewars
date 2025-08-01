// 🧩 Challenge: Smallest unused ID (Codewars - 8 kyu)
// 🔗 Link: https://www.codewars.com/kata/55eea63119278d571d00006a/train/typescript
// 📂 Category: Fundamentals, Algorithms
//
// 📝 Description:
// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!
//
// 🧪 Examples:
// describe("Basic test", () => {
//     it("Should pass basic tests", () => {
//       assert.equal(nextId([0,1,2,3,5]), 4);
//       assert.equal(nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
//     });

export function nextId(ids: number[]): number {
    let max = Math.max(...ids,0 );
      
      for(let i of Array.from({length : max} , (_, i) => i)){
        if(!ids.includes(i)) return i
      }
      return max + 1 || 0;
    }