func majorityElement(nums []int) int {
	memo := make(map[int]int)
	var result int
	for _, val := range nums {
		count, exist := memo[val]
		count1, exist1 := memo[result]
		if exist1 {
			if result == val {
				memo[result]++
			} else if !exist {
				memo[val] = 1
			} else {
				if count+1 > count1 {
					result = val
				}
				memo[val]++
			}
		} else {
			result = val
			memo[result] = 1
		}
	}
	return result
}