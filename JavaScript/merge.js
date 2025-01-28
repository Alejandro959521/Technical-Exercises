
nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

let merge = (nums1, m, nums2, n) => {
    let arr1 = []
    let arr2 = []
    
    for (let x = 0; x < m; x++) {
        arr1.push(nums1[x])
    }
    for (let x = 0; x < n; x++) {
        arr2.push(nums2[x])
    }
    let newArr = ([...arr1, ...arr2]).sort((a, b) => a - b)
 
   nums1.splice(0, (m + n), ...newArr);
 return nums1
}
    
console.log(merge(nums1, m, nums2, n))