function numberToWords(num: number): string {
    if (num === 0) return "Zero";
    let num_temp = num;
    let arr = [];
    const zeroToNineteen = [
        "Zero",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen",
    ]
    const units = [" Thousand", " Million", " Billion"]
    const tens = [" Twenty", " Thirty", " Forty", " Fifty", " Sixty", " Seventy", " Eighty", " Ninety"]
    while (num_temp > 0) {
        arr.push(num_temp % 1000)
        num_temp = Math.floor(num_temp / 1000)
    }
    console.log(arr)
    let result = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) continue
        const hundred = Math.floor(arr[i] / 100)
        const ten = arr[i] % 100;
        console.log(ten)
        if (hundred > 0) {
            result += " " + zeroToNineteen[hundred] + " Hundred"
        }
        if (ten <= 19 && ten >= 0) {
            if (ten != 0 || hundred === 0) {
                result += " " + zeroToNineteen[ten]
            }
        } else {
            result += tens[Math.floor(ten / 10) - 2]
            if (ten % 10 > 0) {
                result += " " + zeroToNineteen[ten % 10]
            }
        }
        if (i > 0) {
            result += units[i - 1]
        }
    }
    console.log(result)
    return result.trim()
};