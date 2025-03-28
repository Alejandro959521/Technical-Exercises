
let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]



var plusOne = function(digits) {
    
    nums = BigInt(digits.join('')) + BigInt(1)
    arr = []
    for (let x of String(nums) ){
        arr.push(Number(x))
    }
    return arr

};



console.log(plusOne(digits))