function sumFactorial(arr) {

    let result = []

    for (let i = 0; i < arr.length; i++) {
        let factorial = 1;
        let current = 0;
        while (current < arr[i]) {
            current++
            factorial *= current
        }
        result.push(factorial)
    }
    return result.reduce((a, b) => a + b)
}