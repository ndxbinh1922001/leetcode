function compareVersion(version1: string, version2: string): number {
    const arr_ver1 = version1.split('.').map(e => parseInt(e));
    const arr_ver2 = version2.split('.').map(e => parseInt(e));
    const len1 = arr_ver1.length;
    const len2 = arr_ver2.length;
    const len = Math.max(len1, len2);
    for (let i = 0; i < len; i++) {
        if (i >= len1) {
            if (arr_ver2[i] === 0) {
                if (i === len2 - 1) {
                    return 0;
                } else {
                    continue
                }
            } else {
                return -1;
            }
        } else if (i >= len2) {
            if (arr_ver1[i] === 0) {
                if (i === len1 - 1) {
                    return 0;
                } else {
                    continue
                }
            } else {
                return 1;
            }
        } else if (arr_ver1[i] > arr_ver2[i]) {
            return 1
        } else if (arr_ver1[i] < arr_ver2[i]) {
            return -1
        } else {
            continue
        }
    }
    return 0
};