
let s = "MCMXCIV"

var romanToInt = function(s) {

   cont = 0
   for (let x = 0; x < s.length; x++) {

        if (s[x] + s[x+1] == "IV") cont += 4, x++
        else if (s[x] + s[x+1] == "IX") cont += 9, x++
        else if (s[x] + s[x+1] == "XL") cont += 40, x++
        else if (s[x] + s[x+1] == "XC") cont += 90, x++
        else if (s[x] + s[x+1] == "CD") cont += 400, x++
        else if (s[x] + s[x+1] == "CM") cont += 900, x++
        else if (s[x] == "I") cont += 1
        else if (s[x] == "V") cont += 5
        else if (s[x] == "X") cont += 10
        else if (s[x] == "L") cont += 50
        else if (s[x] == "C") cont += 100
        else if (s[x] == "D") cont += 500
        else if (s[x] == "M") cont += 1000

   }
    
   return cont
};


console.log(romanToInt(s))