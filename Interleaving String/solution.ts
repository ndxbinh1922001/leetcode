function isInterleave(s1: string, s2: string, s3: string): boolean {
    const len1 = s1.length, len2 = s2.length, len3 = s3.length;
    let memo = new Map();
    const matching = (x: number, y: number, z: number) => {
        if (memo.has(`${x}-${y}-${z}`)) return memo.get(`${x}-${y}-${z}`);
        if (z === len3) return x === len1 && y === len2;
        let result = false
        if (x < len1 && y < len2 && s3[z] === s1[x] && s3[z] === s2[y]) {
            result = matching(x + 1, y, z + 1) || matching(x, y + 1, z + 1)
            memo.set(`${x}-${y}-${z}`, result)
        } else if (x < len1 && s3[z] === s1[x]) {
            result = matching(x + 1, y, z + 1)
            memo.set(`${x}-${y}-${z}`, result)
        } else if (y < len2 && s3[z] === s2[y]) {
            result = matching(x, y + 1, z + 1)
            memo.set(`${x}-${y}-${z}`, result)
        }
        return result
    }
    return matching(0, 0, 0)
};