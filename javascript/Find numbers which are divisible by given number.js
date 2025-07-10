function divisibleBy(numbers, divisor) {
    console.log(`These are the numbers: ${numbers}`);
    console.log(`This is the divisor: ${divisor}`);
    
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor === 0) {
            answer.push(numbers[i]);
        }
    }
    
    return answer;
}
