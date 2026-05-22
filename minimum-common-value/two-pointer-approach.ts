// i just made a mistake in the while x.x

function getCommon(nums1: number[], nums2: number[]): number {

    if (nums1[nums1.length-1] < nums2[0] || nums2[nums2.length-1] < nums1[0]) return -1;

    let currNum1 = 0
    let currNum2 = 0

    while (currNum1 < nums1.length && currNum2 < nums2.length) {
        if (nums1[currNum1] == nums2[currNum2]) return nums1[currNum1]

        if (nums1[currNum1] > nums2[currNum2] && currNum2 < nums2.length) {
            currNum2 ++
        } else {
            currNum1 ++
        }
    }

    return -1
};
