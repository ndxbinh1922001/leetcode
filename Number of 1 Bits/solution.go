func hammingWeight(n int) int {
    var result int = 0
    for {
        if n==0 {break}
        result += n&1
        n >>= 1
    }
    return result
}