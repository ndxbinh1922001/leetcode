function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false
    const memo = new Map()
    for (const a of s) {
        if (memo.has(a)) {
            memo.set(a, memo.get(a) + 1)
        } else {
            memo.set(a, 1)
        }
    }
    for (const b of t) {
        if (!memo.has(b)) return false
        if (memo.get(b) - 1 === 0) {
            memo.delete(b)
            continue
        }
        memo.set(b, memo.get(b) - 1)
    }
    return memo.size === 0
};