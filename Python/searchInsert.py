
nums = [1,3,5,6] 
target = 5

def searchInsert(nums,target):

    for x in range(len(nums)):

        if nums[x] == target: return x
        elif nums[x] > target: return x
    return len(nums)        



print(searchInsert(nums, target))    