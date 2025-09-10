function isMatch(s: string, p: string): boolean {
    const lens = s.length, lenp = p.length;
    const matching = (i: number, j: number) => {
        if (j === lenp) {
            return i === lens
        }
        const firstMatch = (i < lens && j < lenp) && (s[i] === p[j] || p[j] === '.')
        if (j + 1 < lenp && p[j + 1] === '*') {
            return matching(i, j + 2) || (firstMatch && matching(i + 1, j))
        } else {
            return firstMatch && matching(i + 1, j + 1)
        }
    }
    return matching(0, 0)
};