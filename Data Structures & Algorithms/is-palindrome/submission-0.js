class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let text = s.toLowerCase().replace(/[^\w]|_|\s/g, "");
        
        for (let i = 0; i < text.length; i++){
            let front = text[i]
            let back = text[(text.length-1)-i]
            let check = (text.length-1) - i

            if (i > check || i == check) break
            if (front !== back) return false
        }

        return true
    }
}
