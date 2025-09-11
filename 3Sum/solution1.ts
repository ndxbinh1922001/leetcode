function threeSum(nums: number[]): number[][] {
    let checked = new Map();
    let result = []
    const len = nums.length;
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            console.log(checked.get(nums[i]) === nums[j])
            console.log(checked)
            if (checked.has(`${nums[i]},${nums[j]}`)) {
                continue
            }
            for (let k = j + 1; k < len; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]])
                    checked.set(`${nums[i]},${nums[j]}`, true)
                    checked.set(`${nums[j]},${nums[i]}`, true)
                    checked.set(`${nums[i]},${nums[k]}`, true)
                    checked.set(`${nums[k]},${nums[i]}`, true)
                    checked.set(`${nums[j]},${nums[k]}`, true)
                    checked.set(`${nums[k]},${nums[j]}`, true)
                    break;
                }
            }
        }
    }
    return result
};