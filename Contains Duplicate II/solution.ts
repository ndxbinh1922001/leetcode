function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const memo = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (memo.has(nums[i])) {
            if (i - memo.get(nums[i]) <= k) {
                return true
            }
        }
        memo.set(nums[i], i)
    }
    return false
};