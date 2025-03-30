

let ransomNote = "aa" 
let magazine = "aab"
var canConstruct = function(ransomNote, magazine) {
    
        let dict = {}
        let x = 0
        
        for (let str of magazine){
            if (dict[str]) dict[str]++
            else dict[str] = 1
        }
       
        for (str2 of ransomNote){
            if (dict[str2] && dict[str2] != 0){
                x++
                dict[str2]--
            } 
        }
       
        return x == ransomNote.length 
        
};
console.log(canConstruct(ransomNote, magazine))