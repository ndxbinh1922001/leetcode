function isSubsequence(s: string, t: string): boolean {
    let x = 0
    for (let i = 0; i<t.length; i++){
        if (x<s.length && s[x] === t[i]){
            x++
        }
    }
    return x === s.length
};