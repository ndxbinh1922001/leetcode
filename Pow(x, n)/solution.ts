function myPow(x: number, n: number): number {
    if (n === 0) return 1;
    const negative = n < 0
    n = Math.abs(n)
    const recurse = (y: number, k: number) => {
        if (k === 0) return 1;
        const half = recurse(y, Math.floor(k / 2));
        return k % 2 === 0 ? half * half : y * half * half;
    }
    const result = recurse(x, n);
    return negative ? 1 / result : result;
};