
arr = [3,3,4]

def majorityElement (nums):
    dictionary = {}
    out = 0
    cont = 0   
    for key in nums:
        if key in dictionary: dictionary[key] += 1
        else: dictionary[key] = 1
    for key in dictionary:
        if cont < dictionary[key]: 
            out = key
            cont = dictionary[key]
    return out



print(majorityElement(arr))   