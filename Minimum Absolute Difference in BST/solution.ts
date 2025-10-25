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

function getRightValue(root: TreeNode): number {
    if (!root.right) return root.val
    else return getRightValue(root.right)
}

function getLeftValue(root: TreeNode): number {
    if (!root.left) return root.val
    else return getLeftValue(root.left)
}

function getMinimumDifference(root: TreeNode | null): number {
    let result = 100001
    if (root?.left && root?.right) {
        result = Math.min(
            root.val - getRightValue(root.left),
            getLeftValue(root.right) - root.val,
            getMinimumDifference(root.left),
            getMinimumDifference(root.right),
            result
        )
    } else if (root?.left) {
        result = Math.min(
            root.val - getRightValue(root.left),
            getMinimumDifference(root.left),
            result
        )
    } else if (root?.right) {
        result = Math.min(
            getLeftValue(root.right) - root.val,
            getMinimumDifference(root.right),
            result
        )
    }
    return result
};