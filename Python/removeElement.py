nums = [3,2,2,3]
val = 3
    
def removeElement(nums, val):
   
        
        k = 0
        for x in nums:
            if(x != val):
                nums[k] = x    
                k += 1
           

        

        return nums


print(removeElement(nums, val))

   