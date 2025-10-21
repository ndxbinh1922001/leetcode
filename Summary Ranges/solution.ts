function summaryRanges(nums: number[]): string[] {
    let result = [], left = 0, right = 0, len = nums.length
    while (left < len) {
        if (right + 1 < len && nums[right + 1] - nums[right] == 1) {
            right++
            continue
        } else {
            if (left === right) {
                result.push(`${nums[left]}`)
            } else {
                result.push(`${nums[left]}->${nums[right]}`)
            }
            left = right + 1
            right = left
        }
    }
    return result
};