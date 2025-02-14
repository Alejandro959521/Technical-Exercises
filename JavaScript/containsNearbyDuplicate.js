

let nums = [1,2,3,1] 
let k = 3


var containsNearbyDuplicate = function(nums, k) {
    
    let seen = {}

    for (x = 0; x < nums.length; x++) {

        if (seen.hasOwnProperty(nums[x]) && Math.abs(x - seen[nums[x]]) <= k) return true

        seen[nums[x]] = x
    
    }
    return false




};


console.log(containsNearbyDuplicate(nums, k))