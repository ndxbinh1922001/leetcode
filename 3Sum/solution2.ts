function threeSum(nums: number[]): number[][] {
    let result: number[][] = [];
    nums = nums.sort((a, b) => a - b);
    const len = nums.length
    for (let i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1, right = len - 1;
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                result.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;
                right--;
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result
};