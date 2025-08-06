// 🧩 Challenge:Short Long Short(Codewars - 8 kyu)
// 🔗 Link: https://www.codewars.com/kata/<kata-id>
// 📂 Category: Algorithms, Strings
//
// 📝 Description:
//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output
// //
// 🧪 Examples:
// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

export function shortLongShort(a:string, b:string) {
    return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
    }