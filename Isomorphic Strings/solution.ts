function isIsomorphic(s: string, t: string): boolean {
    const matching1 = new Map()
    const matching2 = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!matching1.has(s[i]) && !matching2.has(t[i])) {
            matching1.set(s[i], t[i])
            matching2.set(t[i], s[i])
        } else {
            if (matching1.get(s[i]) !== t[i] || matching2.get(t[i]) !== s[i]) {
                return false
            }
        }
    }
    return true
};