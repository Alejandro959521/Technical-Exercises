
s = "   fly me   to   the moon  "

var lengthOfLastWord = function(s) {
    
    word = s.trim()
    cont = 0
    for (let x = word.length - 1; x > -1; x--){
        if (word[x] == ' ') break       
        cont++
    }
    return cont
};

console.log(lengthOfLastWord(s))