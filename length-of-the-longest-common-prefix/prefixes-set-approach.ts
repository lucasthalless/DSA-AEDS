// had to take some hints. i thougth about the whole math approach to not use string conversion but was distracted by my job to finish the train of thougth...

function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    let longestCommonPrefixLength = 0;
    let prefixes = new Set<number>()

    for (let i = 0; i < arr1.length; i++) {
        let x = arr1[i]

        while (x > 0) {
            prefixes.add(x);
            x = Math.floor(x / 10);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let x = arr2[i]
        while (x > 0) {
            if (prefixes.has(x)) {
                longestCommonPrefixLength = Math.max(longestCommonPrefixLength, x.toString().length);
            }
            x = Math.floor(x / 10);
        }
    }

    return longestCommonPrefixLength
};
