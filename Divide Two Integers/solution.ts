function divide(dividend: number, divisor: number): number {
    let quotient = 0;
    const negative = (dividend < 0) !== (divisor < 0);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    if (divisor === 2147483648 && dividend === 2147483648) return negative ? -1 : 1
    if (divisor == 2147483648) return 0
    let a = 30;
    for (let i = 0; i < 31; i++) {
        if (divisor <= 1 << i) {
            a = i;
            break;
        }
    }
    while (dividend >= divisor) {
        let multi = 0;
        while (dividend >= divisor << (multi + 1) && multi + a < 30) {
            multi++;
        }
        quotient += 1 << multi
        dividend -= divisor << multi
    }
    return negative ? (quotient >= 2147483648 ? -2147483648 : -quotient) : (quotient >= 2147483648 ? 2147483647 : quotient)
};