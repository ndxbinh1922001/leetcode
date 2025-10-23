func canConstruct(ransomNote string, magazine string) bool {
	memo := make(map[rune]int)
	for _, val := range magazine {
		memo[val]++
	}
	for _, val := range ransomNote {
		_, exist := memo[val]
        if exist {
            memo[val]--
        } else {
            return false
        }
        if memo[val] == 0 {
            delete(memo, val)
        }
	}
    return true
}