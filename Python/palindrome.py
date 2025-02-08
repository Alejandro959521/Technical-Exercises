import re

s = "0P"

def isPalindrome (s):

    clean = re.sub(r'[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9]', '', s).lower()
    flip = ""
    for x in range(len(clean) - 1, -1, -1):
        flip += clean[x]

    if flip == clean: return True
    else: return False



print( isPalindrome(s))