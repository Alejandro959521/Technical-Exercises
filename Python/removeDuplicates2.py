nums = [0,0,1,1,1,1,2,3,3]

# nums = [1,1,2]
   
def removeElement(nums):
        
    k = 1
    for x in range(1, len(nums)):
        if(nums[x] != nums[x - 1]):
            nums[k] = nums[x]    
            k += 1
           
    return k


print(removeElement(nums))