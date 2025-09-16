function nextPermutation(nums: number[]): void {
    const len = nums.length;
    let flag = false;
    if (len === 1) {
        return
    }
    for (let i = len - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            flag = true
            for (let j = len - 1; j > i; j--) {
                if (nums[j] > nums[i]) {
                    [nums[i], nums[j]] = [nums[j], nums[i]]
                    break;
                }
            }
            for (let m = i + 1; m < len - 1; m++) {
                for (let n = m + 1; n < len; n++) {
                    if (nums[n] < nums[m]) {
                        [nums[m], nums[n]] = [nums[n], nums[m]]
                    }
                }
            }
            break;
        }
    }
    if (!flag) {
        for (let m = 0; m < len - 1; m++) {
            for (let n = m + 1; n < len; n++) {
                if (nums[n] < nums[m]) {
                    [nums[m], nums[n]] = [nums[n], nums[m]]
                }
            }
        }
    }
};