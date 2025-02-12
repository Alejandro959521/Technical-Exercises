
let s = "rat" 
let t = "car"



var isAnagram = function(s, t) {
   
    let arrS = s.split('')
    let arrT = t.split('')
    let sortS = arrS.sort()
    let sortT = arrT.sort()
    console.log(arrS)
    if (sortS.length != sortT.length) return false
       
     for (let x = 0; x < sortS.length; x++) {
        let charT = sortT[x]
        let charS = sortS[x]
        
            if ( charT != charS) return false  
                
        }
    return true


};


console.log(isAnagram(s, t))