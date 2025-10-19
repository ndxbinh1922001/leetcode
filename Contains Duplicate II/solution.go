func containsNearbyDuplicate(nums []int, k int) bool {
	memo := make(map[int]int)
	for index, value := range nums {
		idx, exist := memo[value]
		if exist {
			if index-idx <= k {
				return true
			}
		}
		memo[value] = index
	}
	return false
}