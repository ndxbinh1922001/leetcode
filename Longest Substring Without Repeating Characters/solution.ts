function lengthOfLongestSubstring(s: string): number {
    if (s === "") {
        return 0
    }
    let result = 1
    let lastest_checked_point = 1
    for (let i = 0; i < s.length; i++) {
        let temp_str = s.slice(i, lastest_checked_point);
        console.log("temp_str=", temp_str)
        for (let j = lastest_checked_point; j < s.length; j++) {
            console.log("j=", j);
            if (temp_str.includes(s[j])) {
                lastest_checked_point = j;
                break;
            } else {
                temp_str += s[j];
                const distance = j - i + 1;
                if (distance > result) {
                    result = distance
                }
                console.log("result=", result)
            }
        }
    }
    return result
};