function hammingWeight(n: number): number {
    let result = 0;
    while (true) {
        if (n === 0) break;
        result += n & 1
        n >>>= 1
    }
    return result
};