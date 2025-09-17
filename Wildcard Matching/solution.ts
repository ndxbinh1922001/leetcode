function isMatch(s: string, p: string): boolean {
    const lens = s.length, lenp = p.length;
    const memo = new Map<string, boolean>();

    const matching = (i: number, j: number): boolean => {
        const key = `${i},${j}`;
        if (memo.has(key)) return memo.get(key)!;

        if (j === lenp) return i === lens;

        let ans: boolean;
        if (p[j] === '*') {
            while (j + 1 < lenp && p[j + 1] === '*') j++;
            ans = matching(i, j + 1) || (i < lens && matching(i + 1, j));
        } else {
            ans = i < lens && (p[j] === '?' || p[j] === s[i]) && matching(i + 1, j + 1);
        }
        memo.set(key, ans);
        return ans;
    };

    return matching(0, 0);
}