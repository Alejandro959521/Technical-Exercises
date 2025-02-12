

let pattern = "abba" 
let s = "dog constructor constructor dog"

var wordPattern = function (s, pattern) {
    let mapStr_s = s.split(" ");
    let dict = new Map();
    let mapStr_t = []
    let x = 0
    console.log(mapStr_s)

     if (pattern.length != mapStr_s.length)  return false  
        
       for (let str_s of mapStr_s) {

        if (dict.has(str_s)) {
            console.log(str_s)
            if (dict.get(str_s) != pattern[x]) return false
        }
        else if (mapStr_t.includes(pattern[x])) {
            return false
        }
        else {
            dict.set(str_s, pattern[x]);
            mapStr_t.push(pattern[x])           
        }
        x++
        console.log(dict)
    }

    return true

};

console.log(wordPattern(s, pattern))