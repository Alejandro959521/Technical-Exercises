
nums = [1,1,3,1,2,3]
k = 2

def containsNearbyDuplicate(nums, k):
   
    seen = {}

     for y in range(0, len(nums)):
        
        if (nums[y] in seen and abs(y - seen[nums[y]]) <= k):
            return True
        seen[nums[y]] = y 
        print(seen)
    return False
   
print(containsNearbyDuplicate(nums, k))