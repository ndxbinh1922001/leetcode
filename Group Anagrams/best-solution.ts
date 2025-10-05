const primes = new Uint32Array([
    2, 3, 5, 7, 11, 13,
    17, 19, 23, 29, 31,
    37, 41, 43, 47, 53,
    59, 61, 67, 71, 73,
    79, 83, 89, 97, 101
]);

function groupAnagrams(strs: string[]): string[][] {
    const anagrams = new Map<number, string[]>()
    let key = 1;
    for (let i = 0; i < strs.length; i++) {
        key = 1;
        for (let j = 0; j < strs[i].length; j++) {
            const idx = strs[i].charCodeAt(j) - 97
            key *= primes[idx];
        }
        const bucket = anagrams.get(key)
        if (bucket) bucket.push(strs[i])
        else anagrams.set(key, [strs[i]])
    }

    return Array.from(anagrams.values())
};