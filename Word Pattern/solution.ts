function wordPattern(pattern: string, s: string): boolean {
    const arrPattern = pattern.split(""), arrS = s.split(" ")
    if (arrPattern.length !== arrS.length) return false
    const memo1 = new Map(), memo2 = new Map()
    for (let i = 0; i < arrPattern.length; i++) {
        if (!memo1.has(arrPattern[i]) && !memo2.has(arrS[i])) {
            memo1.set(arrPattern[i], arrS[i])
            memo2.set(arrS[i], arrPattern[i])
        } else {
            if (memo1.get(arrPattern[i]) !== arrS[i] || memo2.get(arrS[i]) !== arrPattern[i]) {
                return false
            }
        }
    }
    return true
};