
s = "cat"
t = "rat"



def isAnagram (s, t):

    sort_s =sorted(s)
    sort_t = sorted(t)
    if len(sort_s) != len(sort_t):
        return False
    
    for char_s, char_t in zip(sort_s, sort_t):
        
         if char_s != char_t: return False
    return True

    
print(isAnagram(s, t))    