function containsDuplicate(nums: number[]): boolean {
    const memo = new Map()
    for (let val of nums) {
        if (memo.has(val)) return true
        else {
            memo.set(val, true)
        }
    }
    return false
};