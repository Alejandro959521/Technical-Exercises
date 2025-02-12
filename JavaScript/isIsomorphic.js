
let s = "egg"
let t = "add"


var isIsomorphic = function (s, t) {

    let dict = {}
    let mapStr_t = []
    let x = 0

    if (s.length != t.length) {

        return false

    }

    for (let str_s of s) {

        if (dict[str_s]) {
            if (dict[str_s] != t[x]) return false
            else x++
        }
        else if (mapStr_t.includes(t[x])) {
            return false
        }
        else {
            dict[str_s] = t[x]
            mapStr_t.push(t[x])
            x++
        }

    }

    return true

};

console.log(isIsomorphic(s, t))