export function correct(s: string): string {
    // your code here

    let answer = ''

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "5") {
            answer += "S"
        }
        else if (s[i] === "0") {
            answer += "O"
        }
        else if (s[i] === "1") {
            answer += "I"
        }
        else {
            answer += s[i]
        }
    }

    return answer
}