func isHappy(n int) bool {
	memo := make(map[int]bool)
	var recursion func(int) bool
	recursion = func(m int) bool {
		_, exist := memo[m]
		if exist {
			return false
		}
		var sumSquare int = 0
		temp := m
		for temp != 0 {
			a := temp % 10
			sumSquare += a * a
			temp /= 10
		}
		if sumSquare == 1 {
			return true
		} else {
			memo[m] = true
			return recursion(sumSquare)
		}
	}
	return recursion(n)
}