func containsDuplicate(nums []int) bool {
	memo := make(map[int]bool)
	for _, val := range nums {
		_, exist := memo[val]
		if exist {
			return true
		} else {
			memo[val] = true
		}
	}
    return false
}