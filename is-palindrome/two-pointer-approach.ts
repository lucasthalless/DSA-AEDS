function isPalindrome(x: number): boolean {
    if (x < 0) return false

    const stringfiedX = x.toString()

    for (let i = 0; i < stringfiedX.length-i; i++) {
        if (stringfiedX[i] !== stringfiedX[(stringfiedX.length-1) - i]) return false
    }

    return true
};
