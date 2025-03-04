
let nums = [1,3,5,6] 
let target = 7

var searchInsert = function(nums, target) {
    
    for (let x = 0; x < nums.length; x++){
        
        if ( nums[x] == target )  return x

        else if(nums[x] > target) return x
           
    }
    return nums.length 
        

};



console.log(searchInsert(nums, target))