

ransomNote = "fihjjjjei" 
magazine = "hjibagacbhadfaefdjaeaebgi"

def canConstruct(ransomNote, magazine):
    
    dictionary = {}
    x = 0
        
    for str1 in magazine:
        if str1 in dictionary: dictionary[str1] += 1
        else: dictionary[str1] = 1
        
       
    for str2 in ransomNote:
        if  str2 in dictionary and dictionary[str2] != 0:
            x += 1
            dictionary[str2] -= 1
            
        
       
    return x == len(ransomNote)


print(canConstruct(ransomNote, magazine))