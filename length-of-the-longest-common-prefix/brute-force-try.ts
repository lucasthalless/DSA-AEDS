// time limit exceeded OBVIOUSLY

function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    let longestCommonPrefixLength = 0;
    let prefixes = new Set([])

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 1; j <= arr1[i].toString().length; j++) {
            if (prefixes.has(arr1[i].toString().substring(0, j)) == false) {
                prefixes.add(arr1[i].toString().substring(0, j));
            }
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        prefixes.forEach((prefix) => {
            if (arr2[i].toString().substring(0, prefix.length) == prefix) {
                if (prefix.length > longestCommonPrefixLength) {
                    longestCommonPrefixLength = prefix.length
                }
            }
        })
        
        
    }

    return longestCommonPrefixLength
};
