func isIsomorphic(s string, t string) bool {
	matching1 := make(map[byte]byte)
    matching2 := make(map[byte]byte)
	for i := 0; i < len(s); i++ {
		x1, exist1 := matching1[s[i]]
        x2, exist2 := matching2[t[i]]
		if !exist1 && !exist2 {
			matching1[s[i]] = t[i]
            matching2[t[i]] = s[i]
		} else {
			if x1 != t[i] || x2 != s[i] {
				return false
			}
		}
	}
	return true
}