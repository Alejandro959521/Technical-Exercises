
haystack = "mississippi"
needle = "sipp"

def strStr(haystack, needle):
    

    for x in range(len(haystack) - len(needle) + 1):
        if haystack[x:x + len(needle)] == needle: 
            return x
                
    return -1

print(strStr(haystack, needle))