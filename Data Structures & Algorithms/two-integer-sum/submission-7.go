func twoSum(nums []int, target int) []int {

    maps := make(map[int]int)

    for index, value := range nums {
        val, ok := maps[value]
        if ok {
            return []int{val, index}
        } 

        different := target - value
        maps[different] = index
    }
    return nil
}