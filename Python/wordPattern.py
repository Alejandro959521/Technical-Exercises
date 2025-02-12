
pattern = "abba" 
s = "dog constructor constructor dog"

def wordPattern(s, pattern):

    dictionary = {}
    
    pattern_map = set()
    mapStr_s = s.split(" ")

    if len(mapStr_s) != len(pattern):
        return False
    
    for char_s, char_pattern in zip(mapStr_s, pattern):
      
        if char_s in dictionary:
            if dictionary[char_s] != char_pattern:
                return False
        else:
            if char_pattern in pattern_map:
                return False

            dictionary[char_s] = char_pattern
            pattern_map.add(char_pattern)
  
    return True 


print(wordPattern(s, pattern))    