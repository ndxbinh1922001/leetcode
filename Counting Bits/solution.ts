function countBits(n: number): number[] {
    const count1 = (x: number) => {
        let result = 0, temp =x;
        while (temp !== 0) {
            const a = temp & 1
            if (a === 1) {
                result ++
            }
            temp >>>= 1
        }
        return result
    }
    let result = []
    for (let i = 0; i<=n; i++) {
        result.push(count1(i))
    }
    return result
};