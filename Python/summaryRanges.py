

nums = [0,2,3,4,6,8,9]

def summaryRanges(nums):

    if not nums: return []

    arr = []
    start = nums[0]

    for x in range(1,len(nums) + 1):

        if x == len(nums) or nums[x] != nums[x - 1] + 1:
            if start == nums[x - 1]:
                arr.append(f"{start}")
            else: 
                arr.append(f"{start} -> {nums[x - 1]}")
            if x < len(nums):    
                start = nums[x]

    return arr




print(summaryRanges(nums))    