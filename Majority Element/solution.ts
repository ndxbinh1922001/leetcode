function majorityElement(nums: number[]): number {
    const memo = new Map();
    let result = null
    for (const val of nums) {
        if (memo.has(result)) {
            const count = memo.get(result)
            if (result === val) {
                memo.set(val, count + 1)
            } else if (!memo.has(val)) {
                memo.set(val, 1)
            } else {
                const count1 = memo.get(val)
                if (count1 + 1 > count) {
                    result = val
                }
                memo.set(val, count1 + 1)
            }
        } else {
            result = val
            memo.set(val, 1)
        }
    }
    return result
};