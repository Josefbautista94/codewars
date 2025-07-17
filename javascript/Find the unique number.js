function findUniq(arr) {
    // do magic

    let counts = {};

    for (const num of arr) {

        counts[num] = (counts[num] || 0) + 1;

    }

    let minCount = Infinity;
    let answer = null;

    for (const key in counts) {
        if (counts[key] < minCount) {
            minCount = counts[key]
            answer = Number(key)
        }
    }
    return answer;
}