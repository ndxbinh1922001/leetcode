import (
    "strings"
)

func wordPattern(pattern string, s string) bool {
	arrS := strings.Split(s, " ")
    if len(pattern) != len(arrS) {
        return false
    }

    memo1 := make(map[string]byte)
    memo2 := make(map[byte]string)
    for i:=0; i<len(pattern); i++ {
        value1, exist1 := memo1[arrS[i]]
        value2, exist2 := memo2[pattern[i]]
        if !exist1 && !exist2 {
            memo1[arrS[i]] = pattern[i] 
            memo2[pattern[i]] = arrS[i] 
        } else {
            if value1 != pattern[i] || value2 != arrS[i] {
                return false
            }
        }
    }
    return true
}