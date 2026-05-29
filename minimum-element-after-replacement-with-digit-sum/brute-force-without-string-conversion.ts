// beats 100%! and i did it in like, 5 minutes? satisfaction.

function minElement(nums: number[]): number {
    let minElement: number;
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i]
        let digitsSum = 0

        while (x > 0) {
            digitsSum = digitsSum + (x % 10)
            x = Math.floor(x / 10)
        }

        if (!minElement || digitsSum < minElement) minElement = digitsSum
    }

    return minElement
};
