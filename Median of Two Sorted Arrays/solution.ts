function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let i = 0, j = 0;
    const len1 = nums1.length, len2 = nums2.length;
    let mergeArr = []
    while (i != len1 || j != len2) {
        if (i === len1 || nums2[j] < nums1[i]) {
            mergeArr.push(nums2[j]);
            j++;
        } else if (j === len2 || nums2[j] > nums1[i]) {
            mergeArr.push(nums1[i]);
            i++;
        } else if (nums2[j] === nums1[i]) {
            mergeArr.push(nums1[i]);
            mergeArr.push(nums2[j]);
            i++;
            j++;
        }
    }
    const mergeLen = mergeArr.length
    if (mergeLen % 2 === 0) {
        return parseFloat(((mergeArr[mergeLen / 2] + mergeArr[mergeLen / 2 - 1]) / 2).toFixed(5))
    } else {
        return parseFloat(mergeArr[Math.floor(mergeLen / 2)].toFixed(5))
    }
};
