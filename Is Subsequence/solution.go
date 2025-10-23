func isSubsequence(s string, t string) bool {
	var x int = 0
	for i := 0; i < len(t); i++ {
		if x < len(s) && t[i] == s[x] {
			x++
		}
	}
	return x == len(s)
}