nums = [0,0,1,1,1,1,2,3,3]
# nums = [1,1,1,2,2,3]
   
def removeElement(nums):
        
    k = 2
    
    for x in range(2, len(nums)):
        if nums[x] != nums[k - 2]:
            nums[k] = nums[x]   
            k += 1
        
    return k 


print(removeElement(nums))