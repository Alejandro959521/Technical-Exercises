

let haystack = "mississippi"
let needle = "sipp"

var strStr = function(haystack, needle) {
    for (let x = 0; x <= haystack.length - needle.length; x++) {

        if (haystack.substring(x, x + needle.length) === needle) {
           return x
        }
    }  
    return -1
};

console.log(strStr( haystack,needle))