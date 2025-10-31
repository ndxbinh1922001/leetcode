/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function calc(subRoot: TreeNode | null, level: number, sum: number[], count: number[]) {
    if (!subRoot) return
    if (sum.length <= level){
        sum.push(0)
        count.push(0)
    }
    sum[level] += subRoot.val
    count[level]++
    if (subRoot.left || subRoot.right) {
        level++
        calc(subRoot.left, level, sum, count)
        calc(subRoot.right, level, sum, count)
    }
}
function averageOfLevels(root: TreeNode | null): number[] {
    let sum: number[] = [], count: number[] = [], result: number[] = []
    calc(root, 0, sum, count)
    for (let i = 0; i < sum.length; i++) {
        result[i] = sum[i] / count[i]
    }
    return result
};