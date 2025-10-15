function isHappy(n: number): boolean {
    const memo = new Map()
    const recursion = (m: number) => {
        if (memo.has(m)) return false
        let sumSquare = 0, temp = m;
        while (temp !== 0) {
            sumSquare += Math.pow(temp % 10, 2)
            temp = Math.floor(temp / 10)
        }
        if (sumSquare === 1) {
            return true
        } else {
            memo.set(m, true)
            return recursion(sumSquare)
        }
    }
    return recursion(n)
};