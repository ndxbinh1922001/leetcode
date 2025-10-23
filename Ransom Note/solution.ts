function canConstruct(ransomNote: string, magazine: string): boolean {
    let arr = Array(26).fill(0)
    for (const a of magazine) {
        arr[a.charCodeAt(0) - 97]++
    }
    for (const a of ransomNote) {
        const charCode = a.charCodeAt(0)
        arr[charCode - 97]--
        if (arr[charCode - 97] < 0) {
            return false
        }
    }
    return true
};