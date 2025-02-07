
strs = ["flower","flow","flight"]

def longestCommonPrefix(strs):
    strs.sort()
    first = strs[0]
    last = strs[len(strs) - 1]
    output = ""

    for x in range(len(first)):
        if first[x] == last[x]:
            output += first[x]
        else: break    
    return output


print(longestCommonPrefix(strs))    