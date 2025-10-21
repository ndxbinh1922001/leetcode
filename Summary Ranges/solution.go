import "fmt"

func summaryRanges(nums []int) []string {
	var (
		result []string
		left   int = 0
		right  int = 0
		length     = len(nums)
	)
	for left < length {
		if right+1 < length && nums[right+1]-nums[right] == 1 {
			right++
			continue
		} else {
			var a string
			if left != right {
				a = fmt.Sprintf("%d->%d", nums[left], nums[right])
			} else {
                a = fmt.Sprintf("%d", nums[left])
            }
			result = append(result, a)
			left = right + 1
			right = left
		}
	}
	return result
}