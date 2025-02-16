

let nums = [0,2,3,4,6,8,9]

var summaryRanges = function(nums) {

    if (nums.length === 0) return [];
    
    let result = [];
    let start = nums[0]; 

    for (let i = 1; i <= nums.length; i++) {
       
        if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
            if (start === nums[i - 1]) {
                result.push(`${start}`); 
            } else {
                result.push(`${start}->${nums[i - 1]}`); 
            }
            
            start = nums[i];
        }
    }

    return result;

};

console.log(summaryRanges(nums))