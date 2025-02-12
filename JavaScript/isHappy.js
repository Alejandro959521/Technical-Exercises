
let n = 19


var isHappy = function(n) {
    n = String(n);
    if (n < 0 || n <= 9) return false
    
    let arrN = n.split('')

    let adition = (arrN) =>  {
        cont = 0
        for (let x = 0; x < arrN.length; x++) {

            cont += Number(arrN[x])**2
       
        }
        return cont
    }
    
        
    
};

console.log(isHappy(n))