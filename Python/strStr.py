
haystack = "mississippi"
needle = "issip"

def strStr(haystack, needle):
    num = -1
    if needle in haystack:
        for x in range(len(haystack)):
            if haystack[x] == needle[0] and haystack[x + ((len(needle)) - 1)] == needle[(len(needle)) - 1]:               
                num = x
                break
                
    return num

print(strStr(haystack, needle))