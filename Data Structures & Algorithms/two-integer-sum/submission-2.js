class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++){
            let selected_index = i
            for (let j = i+1; j < nums.length; j++){
                let next_index = j
                let sum = nums[selected_index] + nums[next_index]
                console.log(sum)
                if (sum === target) return [i, j]
            }
        }
    }
}
