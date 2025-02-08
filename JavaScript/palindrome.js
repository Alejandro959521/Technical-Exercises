
let s = "0P"
var isPalindrome = function(s) {

    let clean = s.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9]/g, '').toLowerCase();
    let flip = ""
        for (let x = clean.length -1; x >= 0; x--) {

            flip += clean[x]
            
        }
        if ( flip == clean) return true
        else return false
    
};

console.log(isPalindrome(s))