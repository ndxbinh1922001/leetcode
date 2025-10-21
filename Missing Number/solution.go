func missingNumber(nums []int) int {
	var (
		length int = len(nums)
		sum    int = 0
	)
	for _, n := range nums {
		sum += n
	}
	return length*(length+1)/2 - sum
}