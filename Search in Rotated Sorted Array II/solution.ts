function search(nums: number[], target: number): boolean {
    const len = nums.length;
    let k = 0;
    for (let i = 0; i < len - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            k = i + 1;
            break;
        }
    }
    const searching = (x: number, y: number) => {
        if (x > y) return false;
        const mid = Math.floor((x + y) / 2)
        if (target === nums[mid]) {
            return true;
        } else if (target < nums[mid]) {
            return searching(x, mid - 1)
        } else {
            return searching(mid + 1, y)
        }
    }
    if (target >= nums[0] && target <= nums[k - 1]) {
        return searching(0, k - 1)
    } else {
        return searching(k, len - 1)
    }
};