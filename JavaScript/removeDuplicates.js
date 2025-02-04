 //nums = [0,0,1,1,1,2,2,3,3,4]
 nums = [1,1,1,1]
// nums = [1,1,2]
var removeDuplicates = function(nums) {
    
    for (let x = 0; x < nums.length; x++) {
        if ( nums[x] == nums[x + 1] ) {
            
            nums.splice(x, 1)
            console.log(x)
            x--
                    
        }        
    }
    return nums
};

console.log(removeDuplicates(nums))