
let s = "abc" 
let t = "ahbgdc"


var isSubsequence = function(s, t) {
    
    let x = 0
    
    for (let str of t) {

        if (x < s.length && str == s[x]) x++

    }
return x == s.length
};


console.log(isSubsequence(s,t))