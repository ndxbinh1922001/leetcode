func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }
	var length int = len(s)
	memo := make(map[byte]int)
	for i := 0; i < length; i++ {
		memo[s[i]]++
		memo[t[i]]--
	}
	for i:= 0; i< length; i++ {
		value := memo[s[i]]
		if value != 0 {
			return false
		}
	}
	return true
}