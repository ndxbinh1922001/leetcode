function fullJustify(words: string[], maxWidth: number): string[] {
    let i = 0;
    const len = words.length;
    let result = [], temp = [], count = 0;
    while (i <= len) {
        if ((i < len && words[i]?.length + count + temp.length > maxWidth) || len === i) {
            let res = "", tempLen = temp.length, spaceLen = maxWidth - count, j = 0, flagAddSpace = false;
            const a = temp.length === 1 ? 2 : temp.length * 2 - 1;
            if (i !== len) {
                while (j < a) {
                    if (!flagAddSpace) {
                        res = res.concat(temp[j / 2]);
                        flagAddSpace = true;
                    } else {
                        const space = temp.length === 1 ? maxWidth - temp[0].length : spaceLen % (tempLen - 1) === 0 ? spaceLen / (tempLen - 1) : Math.ceil(spaceLen / (tempLen - 1));
                        for (let m = 0; m < space; m++) {
                            res = res.concat(' ')
                        }
                        tempLen--;
                        spaceLen -= space;
                        flagAddSpace = false;
                    }
                    j++;
                }
            } else {
                while (j < a) {
                    if (!flagAddSpace) {
                        res = res.concat(temp[j / 2]);
                        flagAddSpace = true;
                    } else {
                        if (spaceLen > 0) {
                            res = res.concat(' ')
                        }
                        tempLen--;
                        spaceLen -= 1;
                        flagAddSpace = false;
                    }
                    j++;
                }
                for (let m = 0; m < spaceLen; m++) {
                    res = res.concat(' ')
                }
            }
            result.push(res);
            temp = [];
            count = 0;
            if (i === len) break;
        } else {
            temp.push(words[i]);
            count += words[i].length;
            i++;
        }
    }
    return result;
};