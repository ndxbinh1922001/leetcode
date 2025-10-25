/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func getRightValue(rootLeft *TreeNode) int {
	if rootLeft.Right == nil {
		return rootLeft.Val
	} else {
		return getRightValue(rootLeft.Right)
	}
}

func getLeftValue(rootRight *TreeNode) int {
	if rootRight.Left == nil {
		return rootRight.Val
	} else {
		return getLeftValue(rootRight.Left)
	}
}

func getMinimumDifference(root *TreeNode) int {
	var result int = 100001
	if root.Right != nil && root.Left != nil {
		distanceLeftValue := getLeftValue(root.Right) - root.Val
		distanceRightValue := root.Val - getRightValue(root.Left)
		if distanceLeftValue < result {
			result = distanceLeftValue
		}
		if distanceRightValue < result {
			result = distanceRightValue
		}
        leftNode := getMinimumDifference(root.Left)
        rightNode := getMinimumDifference(root.Right)
        if leftNode < result {
            result = leftNode
        }
        if rightNode < result {
            result = rightNode
        }
	} else if root.Right != nil {
        distanceLeftValue := getLeftValue(root.Right) - root.Val
        if distanceLeftValue < result {
			result = distanceLeftValue
		}
        rightNode := getMinimumDifference(root.Right)
        if rightNode < result {
            result = rightNode
        }
    } else if root.Left != nil {
        distanceRightValue := root.Val - getRightValue(root.Left)
        if distanceRightValue < result {
			result = distanceRightValue
		}
        leftNode := getMinimumDifference(root.Left)
        if leftNode < result {
            result = leftNode
        }
    }

	return result
}