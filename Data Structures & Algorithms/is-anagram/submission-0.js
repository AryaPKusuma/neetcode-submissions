class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freqS = new Map()
        const freqT = new Map()

        if (s.length !== t.length) return false

        for ( let i = 0; i < s.length; i++){
            let charS = s.charAt(i)
            let charT = t.charAt(i)

            if (freqS.has(charS)){
                freqS.set(charS, freqS.get(charS) + 1 )
            } else {
                freqS.set(charS, 1)
            }

            if (freqT.has(charT)){
                freqT.set(charT, freqT.get(charT) + 1 )
            } else {
                freqT.set(charT, 1)
            }

        }

        console.log(freqS, freqT)

        // map equal
        for ( const [key,value] of freqS){
            if (!freqT.has(key) || freqT.get(key) !== value){
                return false
            }
        }

        return true
    }

}