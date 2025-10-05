function groupAnagrams(strs: string[]): string[][] {
    let memo = new Map();
    const len = strs.length;
    let result = []
    for (let i = 0; i < len; i++) {
        const temp = strs[i].split('').sort().join("-");
        if (memo.has(temp)) {
            result[memo.get(temp)].push(strs[i])
        } else {
            result.push([strs[i]])
            memo.set(temp, result.length - 1)
        }
    }
    return result
};