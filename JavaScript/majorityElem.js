
let array = [3,3,4]
var majorityElement = function(nums) {   
    let dict = {}
   for (let x of nums) {
        if (dict[x]) dict[x] += 1
        else dict[x] = 1
   } 
   let n = 0
   let k = 0 
   for (let x in dict){   
    if ( n < dict[x] ) {
        k = Number(x)
        n = dict[x]
    }   
   }
return  k

};

console.log(majorityElement(array))