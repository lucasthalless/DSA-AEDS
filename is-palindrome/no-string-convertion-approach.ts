function isPalindrome(x: number): boolean {
    if (x < 0) return false

    let reverse = 0
    const xCopy = x

    while (x > 0) {
        reverse = (reverse * 10) + (x % 10)
        x = Math.floor(x / 10)
    }

    return xCopy == reverse
};
