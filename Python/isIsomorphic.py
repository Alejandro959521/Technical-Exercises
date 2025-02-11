
s = "badc"
t = "baba"

def isIsomorphic(s, t):

    dictionary = {}
    t_map = set()
    if len(s) != len(t):
        return False
    for char_s, char_t in zip(s, t):
      
        if char_s in dictionary:
            if dictionary[char_s] != char_t:
                return False
        else:
            if char_t in t_map:
                return False

            dictionary[char_s] = char_t
            t_map.add(char_t)
  
    return True       
        




print(isIsomorphic(s, t))    