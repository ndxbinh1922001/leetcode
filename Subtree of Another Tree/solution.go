/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func isEqualTree(root1 *TreeNode, root2 *TreeNode) bool {
	if root1 == nil && root2 ==nil {
        return true
    }
    if root1 == nil || root2 == nil {
        return false
    }
    if root1.Val != root2.Val {
        return false
    }
    return isEqualTree(root1.Left, root2.Left) && isEqualTree(root1.Right, root2.Right) 
}

func isSubtree(root *TreeNode, subRoot *TreeNode) bool {
    if root == nil {
        return false
    }
    if isEqualTree(root, subRoot) {
        return true
    }
	return isSubtree(root.Left, subRoot) || isSubtree(root.Right, subRoot)
}