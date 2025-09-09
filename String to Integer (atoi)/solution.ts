function myAtoi(s: string): number {
    s = s.trim();
    let isNegative = false;
    let result = 0;
    if (s.charCodeAt(0) === 45) {
        isNegative = true;
        s = s.slice(1);
    } else if (s.charCodeAt(0) === 43) {
        s = s.slice(1);
    }
    for (let i = 0; i <= s.length; i++) {
        if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
            result = result * 10 + parseInt(s[i])
        } else {
            break;
        }
    }
    return (result >= 2147483648) ? isNegative ? -2147483648 : 2147483647 : isNegative ? result * -1 : result;
};