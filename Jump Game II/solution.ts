function jump(nums: number[]): number {
    let result = 1;
    const len = nums.length;
    let step = 0;
    if (step === len - 1) { return 0 }
    while (step < len - 1 && step + nums[step] < len - 1) {
        let tempStep = step + 1;
        let max = 0;
        for (let i = step + 1; i <= step + nums[step]; i++) {
            if (i + nums[i] >= len - 1) {
                tempStep = i
                break;
            } else if (nums[i] + i >= max) {
                tempStep = i
                max = nums[i] + i
            }
        }
        step = tempStep
        result++;
    }
    return result;
};