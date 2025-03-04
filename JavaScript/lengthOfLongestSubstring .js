 s = "pwwkeww"


 var lengthOfLongestSubstring = function(s) {

    let arr = []
    let count = 0

        for (let x of s) {
            
            if (arr.includes(x)) {
                arr.splice(0, arr.indexOf(x) + 1);
            }
            arr.push(x);
            count = Math.max(count, arr.length); 
            console.log(arr)
        }
        
        return count
    
 };

 console.log(lengthOfLongestSubstring(s))