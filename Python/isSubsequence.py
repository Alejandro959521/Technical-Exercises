
s = "abc" 
t = "ahbgdc"
def isSubsequence (s,t):
    x = 0
    for str in t:
        if x < len(s) and str == s[x]:
            x += 1
    return x == len(s)      
        
print(isSubsequence(s,t))    