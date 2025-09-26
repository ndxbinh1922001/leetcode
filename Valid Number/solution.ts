function isNumber(s: string): boolean {
    let dotCount = 0, eCount = 0;
    if ((s[0] === "-" || s[0] === "+") && (s[1] === "-" || s[1] === "+")) return false;
    if (s[0] === 'e' || s[0] === 'E') return false;
    if (s === '+' || s === '-') return false;
    for (let i = 0; i < s.length; i++) {
        console.log(s.charCodeAt(i))
        if (s.charCodeAt(i) === 46) {
            if (i === s.length - 1 && (i === 0 || s.charCodeAt(i - 1) < 48 || s.charCodeAt(i - 1) > 57)) return false;
            if (i + 1 < s.length) {
                if ((s[i + 1] === "e" || s[i + 1] === "E") && (i === 0 || (s.charCodeAt(i - 1) < 48 || s.charCodeAt(i - 1) > 57))) {
                    return false;
                }
            }
            if (eCount >= 1) return false;
            dotCount++;
            continue;
        } else if (s.charCodeAt(i) === 101 || s.charCodeAt(i) === 69) {
            if (i === s.length - 1) return false
            if (i - 1 >= 0 && ((s.charCodeAt(i - 1) < 48 || s.charCodeAt(i - 1) > 57) && s.charCodeAt(i - 1) !== 46)) {
                console.log("da vao day")
                return false
            }
            if (i + 1 < s.length && ((s.charCodeAt(i + 1) < 48 || s.charCodeAt(i + 1) > 57) && s.charCodeAt(i + 1) !== 43 && s.charCodeAt(i + 1) !== 45)) {
                return false
            }
            eCount++;
        } else if ((s.charCodeAt(i) === 43 || s.charCodeAt(i) === 45)) {
            if (i === 0) continue;
            if (i === s.length - 1) return false
            if (i - 1 >= 0 && (s.charCodeAt(i - 1) === 101 || s.charCodeAt(i - 1) === 69)) {
                if (i + 1 >= s.length || s.charCodeAt(i + 1) < 48 || s.charCodeAt(i + 1) > 57) {
                    return false
                }
            } else {
                return false
            }
        } else if ((s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57) && s.charCodeAt(i) !== 43 && s.charCodeAt(i) !== 45) {
            return false
        }
    }
    console.log(dotCount, eCount);
    if (dotCount < 2 && eCount < 2) {
        return true
    } else {
        return false
    }
};