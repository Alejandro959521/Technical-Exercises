
nums1 = [1,2,3,0,0,0] 
m = 3
nums2 = [2,5,6]
n = 3

def merge(nums1, m, nums2, n):
  
    arr1 = []
    arr2 = []

    for x in range(0, m, 1):
        arr1.append(nums1[x])
    for y in range(0, n, 1):
        arr2.append(nums2[y])
    nums1.clear()
    nums1.extend(sorted(arr1 + arr2))

    return nums1


print(merge(nums1, m, nums2, n))