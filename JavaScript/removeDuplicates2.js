
let nums = [0,0,1,1,1,1,2,3,3]


let removeDuplicates = (nums) => {
    
    let k = 2

        for (let x = 2; x < nums.length; x++) {
            
            if ( nums[x] != nums[k - 2]){
                nums[k] = nums[x]
                k++
            }

        }

        return k 

}


console.log(removeDuplicates(nums))