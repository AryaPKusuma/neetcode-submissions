func twoSum(nums []int, target int) []int {

    maps := make(map[int]int)

    for index, value := range nums {
        different := target - value
        // fmt.Println(different)

        val, ok := maps[value]
        if ok {
            return []int{val, index}
        } 

        maps[different] = index
    }
    return nil
}