
let n = 2


var isHappy = function(n) {

    let seen = new Set();
    
    let adition = (num) =>  {

        arrN = String(num).split('');   
        let cont = 0
        for (let x = 0; x < arrN.length; x++) {
            cont += Number(arrN[x])**2     
        }
        return cont
    }
    
    while (n !== 1 && !seen.has(n)){
        seen.add(n);
        n = adition(n)
    }
        return n === 1;    
};

console.log(isHappy(n))