
export function longestPalindrome(s: string): string {
    const n = s.length;
    if (n < 2) return s;

    let bestL = 0, bestR = 0; // [inclusive, inclusive]

    const expand = (L: number, R: number): [number, number] => {
        while (L >= 0 && R < n && s.charCodeAt(L) === s.charCodeAt(R)) {
            L--; R++;
        }
        return [L + 1, R - 1];
    };

    for (let i = 0; i < n; i++) {
        let [l1, r1] = expand(i, i);
        if (r1 - l1 > bestR - bestL) { bestL = l1; bestR = r1; }

        let [l2, r2] = expand(i, i + 1);
        if (r2 - l2 > bestR - bestL) { bestL = l2; bestR = r2; }
    }

    return s.slice(bestL, bestR + 1);
}