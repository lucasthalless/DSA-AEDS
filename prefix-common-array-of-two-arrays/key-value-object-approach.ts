// leetcode 2657

function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    let occurences: Record<string, number> = {}
    let prefixCommonArray = []
    let commonCount = 0

    for (let i = 0; i < A.length; i++) {
        if (occurences[A[i]] == undefined) {
            occurences[A[i]] = 1
        } else {
            occurences[A[i]] = occurences[A[i]] + 1
        }

        if (occurences[B[i]] == undefined) {
            occurences[B[i]] = 1
        } else {
            occurences[B[i]] = occurences[B[i]] + 1
        }

        if (occurences[B[i]] >= 2) {
            commonCount++
        }

        if (A[i] != B[i] && occurences[A[i]] >= 2) {
            commonCount++
        }

        prefixCommonArray.push(commonCount)
    }

    console.log(occurences)

    return prefixCommonArray
};
