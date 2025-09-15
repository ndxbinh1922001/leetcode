function findSubstring(s: string, words: string[]): number[] {
    const wordLen = words[0].length;
    const wordsLen = words.length;
    const subLen = wordLen * wordsLen;
    const sLen = s.length;
    if (sLen < subLen) return [];
    const wordCount = new Map<string, number>();
    for (const w of words) {
        wordCount.set(w, (wordCount.get(w) || 0) + 1);
    }
    const result: number[] = [];
    for (let offset = 0; offset < wordLen; offset++) {
        let left = offset;
        let count = 0;
        const seen = new Map<string, number>();
        for (let right = offset; right + wordLen <= sLen; right += wordLen) {
            const word = s.slice(right, right + wordLen);

            if (wordCount.has(word)) {
                seen.set(word, (seen.get(word) || 0) + 1);
                count++;
                while (seen.get(word)! > wordCount.get(word)!) {
                    const leftWord = s.slice(left, left + wordLen);
                    seen.set(leftWord, seen.get(leftWord)! - 1);
                    left += wordLen;
                    count--;
                }
                if (count === wordsLen) {
                    result.push(left);
                    const leftWord = s.slice(left, left + wordLen);
                    seen.set(leftWord, seen.get(leftWord)! - 1);
                    left += wordLen;
                    count--;
                }
            } else {
                seen.clear();
                count = 0;
                left = right + wordLen;
            }
        }
    }

    return result;
};