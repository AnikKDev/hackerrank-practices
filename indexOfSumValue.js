const twoSum = function (nums, target) {
    let indexsOfElems = [];
    /* for (let i = 0; i < nums.length; i++) {
        for (j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                if(target-nums[i]){
                    const result = indexsOfElems.push(nums.indexOf(nums[i]), nums.indexOf(nums[j])); 
                }
            }

        }
    } */

    /* for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        const diffIndex = nums.indexOf(diff);
        if (diffIndex !== -1 && diffIndex !== i) {
            return [i, diffIndex]
        }
    } */

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))
// twoSum([3, 2, 4], 6)