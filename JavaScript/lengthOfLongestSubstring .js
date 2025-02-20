 s = "pwwkew"


 var lengthOfLongestSubstring = function(s) {

    let arr = []
    let str = ""
        for (let x of s) {
            
            if (arr.includes(x)) {
                arr.push(str)
                let str = ""
            }

            else {

                str += x

            }
            
        }

        return arr
    
 };

 console.log(lengthOfLongestSubstring(s))