function missingNumber(nums: number[]): number {
    const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return nums.length * (nums.length + 1) / 2 - sum
};