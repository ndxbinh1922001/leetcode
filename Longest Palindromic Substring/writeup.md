# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
My first idea was to gradually cut substrings from the input string and compare each substring with its reversed version.
# Code
```typescript []
function reverseString(s: string): string {
    return s.split("").reverse().join("")
}
function longestPalindrome(s: string): string {
    let len=s.length, range=len;
    while (range !== 0){
        for (let i=0; i+range<=len; i++){
            const subString = s.slice(i,i+range);
            if (subString===reverseString(subString)){
                return subString;
            }
        }
        range--;
    }
    return ""
};
```
# Approach
<!-- Describe your approach to solving the problem. -->
I implemented a helper function reverseString. This function splits the string into an array of characters, reverses the array, and then joins it back into a reversed string.
Next, I used a while loop with a decreasing range value. Inside the loop, a for loop slices substrings of length range and compares them with their reversed version. If a substring equals its reversed version, that substring is returned immediately, since the process checks longer substrings first.
However, with longer inputs, this approach caused a "Time Limit Exceeded" error because it repeatedly generates substrings and reverses them, leading to high time complexity.
Therefore, I implemented another solution.
# Code
```typescript []

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
```
# Approach
<!-- Describe your approach to solving the problem. -->
Instead of comparing substrings with their reversed versions, I switched to comparing characters directly using the two-pointer expansion method.
I defined an expand function that takes two parameters, left and right. It checks whether the characters at both ends are equal. If they match, it expands outward by decreasing left and increasing right. Once the expansion fails, it returns the previous valid range.
To cover both odd- and even-length palindromes:
- For odd-length palindromes, I expand with the same starting left and right index.
- For even-length palindromes, I expand with right = left + 1.
The returned ranges represent the longest palindromes around each center. If the length of a newly found palindrome is longer than the current best, I update the best left and right indices.
Finally, I slice the string using these indices to return the longest palindrome.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(1)$$

