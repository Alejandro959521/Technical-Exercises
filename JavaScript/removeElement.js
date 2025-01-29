nums = [3,2,2,3], val = 3


var removeElement = function(nums, val) {
    let k = 0
    for (let x of nums) {
        
        if (x != val) {
            nums[k] = x
            k++
        }
    }
    return k
};