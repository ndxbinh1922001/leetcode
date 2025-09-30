function maxArea(height: number[]): number {
    let result = 0, left = 0, right = height.length - 1;
    while (left < right) {
        result = Math.max(result, Math.min(height[left], height[right]) * (right - left))
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return result;
};

// function maxArea(height: number[]): number {
//     let result = 0;
//     for (let i = 0; i < height.length - 1; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             const temp = Math.min(height[i], height[j]) * (j - i)
//             if (temp > result) result = temp
//         }
//     }
//     return result
// };