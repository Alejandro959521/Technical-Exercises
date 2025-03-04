

s = "pwwkew"

def lengthOfLongestSubstring(s):

    arr = []
    count = 0

    for x in s:
        if x in arr:
            arr = arr[arr.index(x) + 1:]
        arr.append(x)        
        count = max(count, len(arr))
    return count

print(lengthOfLongestSubstring(s))    