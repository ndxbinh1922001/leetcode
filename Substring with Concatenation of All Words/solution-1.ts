function findSubstring(s: string, words: string[]): number[] {
    const wordLen = words[0].length, wordsLen = words.length, subStringLen = wordLen * wordsLen, sLen = s.length;
    if (sLen < subStringLen) {
        return []
    }
    let result = []
    for (let i = 0; i <= sLen - subStringLen; i++) {
        console.log("i=", i)
        let j = i, tempWords = [...words];
        console.log("tempWords: ", tempWords)
        while (j < i + subStringLen) {
            console.log("s.slice(j, j + wordLen):", s.slice(j, j + wordLen))
            const index = tempWords.indexOf(s.slice(j, j + wordLen));
            console.log("index=", index)
            if (index === -1) {
                break;
            } else {
                tempWords.splice(index, 1)
            }
            j += wordLen
        }
        console.log("tempWords-1: ", tempWords)
        if (tempWords.length === 0) {
            result.push(i)
        }
    }
    return result
};