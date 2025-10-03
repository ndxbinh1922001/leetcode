function search(nums: number[], target: number): number {
    let k = 0;
    const len = nums.length
    for (let i = 0; i < len - 1; i++) {
        if (nums[i] >= nums[i + 1]) {
            k = i + 1
        }
    }
    const searching = (start: number, end: number) => {
        if (start > end) return -1;
        const mid = Math.floor((start + end) / 2)
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) return searching(start, mid - 1);
        else return searching(mid + 1, end);
    }
    if (target >= nums[0] && target <= nums[k - 1]) return searching(0, k - 1)
    else if (target >= nums[k] && target <= nums[len - 1]) return searching(k, len - 1)
    else return -1;
};