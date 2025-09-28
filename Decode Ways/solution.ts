function numDecodings(s: string): number {
    const memo = new Map<number, number>();
    const len = s.length;
    const dfs = (i: number) => {
        if (i === len) return 1;
        if (s[i] === '0') return 0;
        if (memo.has(i)) return memo.get(i);
        let ways = dfs(i + 1);
        if (i + 1 < len && parseInt(s.substring(i, i + 2)) <= 26) {
            ways += dfs(i + 2);
        }
        memo.set(i, ways)
        return ways;
    }
    return dfs(0);

};