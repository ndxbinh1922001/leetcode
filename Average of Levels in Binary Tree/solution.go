/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func calc(subRoot *TreeNode, level int, sum *[]float64, count *[]float64) {
	if subRoot == nil {
		return
	}
	if len(*sum) <= level {
		*sum = append(*sum, 0)
		*count = append(*count, 0)
	}
	(*sum)[level] += float64(subRoot.Val)
	(*count)[level]++
	if subRoot.Left != nil || subRoot.Right != nil {
		level++
		calc(subRoot.Left, level, sum, count)
		calc(subRoot.Right, level, sum, count)
	}
}
func averageOfLevels(root *TreeNode) []float64 {
	var (
		sum   []float64
		count []float64
	)
	calc(root, 0, &sum, &count)
	var result []float64 = make([]float64, len(sum))
	for i := 0; i < len(sum); i++ {
		result[i] = sum[i] / count[i]
	}
	return result
}