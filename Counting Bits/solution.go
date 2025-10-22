func count1(x int) int {
	var (
        result int = 0
        temp int = x
    )
    for temp != 0 {
        if a := temp & 1; a == 1 {
            result++
        }
        temp >>= 1
    }
    return result
}
func countBits(n int) []int {
	var result []int
	for i := 0; i <= n; i++ {
        result = append(result, count1(i))
	}
    return result
}