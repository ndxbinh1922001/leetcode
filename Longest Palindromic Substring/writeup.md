# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is my first solution. I thought that I will cut gradually the string and compare the cutted string with its reverse version.
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
I coded more reverse function. Its function is split the string to one array, then the array will be reversed and finally I used join function to connect all element in that array into one reversed string.
I defined a while loop to check if range not equal 0, then it will execute another for loop inside the while loop. Inside the for loop, I will slice the string and use reverve function to compare them. If the result of comparition is equal, I will return that substring, because I cut gradually the string so it is the most large substring.
But with longer input, it errorred with notification "Time limit exceeded".
So I will implement another solution.
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
Instead compare substring to compare pointer.
I will define the expand function firstly. Function receive 2 param includes: left and right. It will compare 2 element right and left, if they are the same, continue expand 2 side by inscreasing the right side and descreasing the left side more 1 unit, if the process of expandation is fail, we will return previous values.
Next, I will check that if the length of the string is a odd number, so it will have a center point, I will start check with the same left and right from the begin of the string to the end of it, if the length of the string is a even number, I will start check the left and right with distance 1 unit. The result of expand funtion will return a pair left and right that they are 2 side of a palindrome string, then check thelength of them, if more than the length of the best left and right, then I will assign new values to the best left and right

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(1)$$

