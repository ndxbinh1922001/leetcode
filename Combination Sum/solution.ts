function combinationSum(candidates: number[], target: number): number[][] {
    let result = [], len = candidates.length;

    const makeCombination = (idx: number, comb: number[], total: number) => {
        if (total === target) {
            result.push([...comb]);
            return;
        }
        if (idx >= len || total > target) return;
        comb.push(candidates[idx])
        makeCombination(idx, comb, total + candidates[idx])
        comb.pop()
        makeCombination(idx + 1, comb, total)
        return
    }
    makeCombination(0, [], 0)
    return result
};
