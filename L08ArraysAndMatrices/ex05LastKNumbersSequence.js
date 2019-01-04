function generateSequence(n, k) {
    let sequence = [1];
    for (let i = 1; i < n; i++) {
        let sum = sequence.slice(Math.max(0, i - k), i).reduce((a, b) => a + b);
        sequence.push(sum);
    }
    console.log(sequence.join(" "));
}

generateSequence(6, 3);
generateSequence(8, 2);