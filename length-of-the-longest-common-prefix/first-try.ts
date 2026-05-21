// the question enunciation didnt cover this test case:
// arr1 = [10]
// arr2 = [17, 11]
// expected output: 1;
// which made me think that this approach should be a valid solution considering only the question... ¯\_(ツ)_/¯

function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    let longestCommonPrefixLength = 0;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j].toString().substring(0, arr1[i].toString().length) == arr1[i].toString()) {
                if (arr1[i].toString().length > longestCommonPrefixLength) {
                    longestCommonPrefixLength = arr1[i].toString().length
                }
            }
            
        }
    }

    return longestCommonPrefixLength
};
