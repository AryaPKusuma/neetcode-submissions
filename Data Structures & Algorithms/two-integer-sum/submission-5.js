class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map()
        for (let i = 0; i < nums.length; i++){
            if (hashMap.has(nums[i])) return [hashMap.get(nums[i]), i]
            let different = target - nums[i]
            hashMap.set(different, i)
        }
    }
}
