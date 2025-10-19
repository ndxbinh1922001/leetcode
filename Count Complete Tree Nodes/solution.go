/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func countNodes(root *TreeNode) int {
    if root == nil {
        return 0
    }
	var result int = 1
	if root.Left != nil {
		result += countNodes(root.Left)
	}
    if root.Right != nil {
        result += countNodes(root.Right)
    }
	return result
}