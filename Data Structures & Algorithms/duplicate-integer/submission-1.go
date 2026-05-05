func hasDuplicate(nums []int) bool {
    myMap := make(map[int]int)

    for _, value := range nums{
        
        if _, ok := myMap[value]; ok{
            return true
        }

        myMap[value] = value
    }

    return false
}
