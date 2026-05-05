class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map()
        for (let i = 0; i < nums.length; i++){
            let different = target - nums[i]
            if (hashMap.has(nums[i])) return [hashMap.get(nums[i]), i]
            hashMap.set(different, i)
        }
    }
}
