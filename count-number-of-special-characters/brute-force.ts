// i dont really like this approach but was the first that came to mind

function numberOfSpecialChars(word: string): number {
    const letters = ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg", "Hh", "Ii", "Jj", "Kk", "Ll", "Mm", "Nn", "Oo", "Pp", "Qq", "Rr", "Ss", "Tt", "Uu", "Vv", "Ww", "Xx", "Yy", "Zz"]

    let specialCharsCount = 0

    for(let i = 0; i < letters.length; i++) {
        if (word.includes(letters[i][0]) && word.includes(letters[i][1])) specialCharsCount++
    }

    return specialCharsCount
};
