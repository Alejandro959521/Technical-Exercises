
# s = "III"
s = "IV"
def romanToInt(s):

    dic = {'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000 }
    cont = 0
    for x in range(len(s)-1):     
        if (dic[s[x]] < dic[s[x + 1]]): 
            cont -= dic[s[x]]       
        elif (dic[s[x]] >= dic[s[x + 1]]): cont += dic[s[x]]
            
    return cont + dic[s[-1]]



print(romanToInt(s))    