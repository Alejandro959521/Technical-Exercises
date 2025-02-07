
s = "   fly me   to   the moon  "

def lengthOfLastWord(s):
    word = s.strip()
    cont = 0
    for x in range(len(word)-1,-1,-1):

        if (word[x] == ' '): break
        cont += 1

    return cont


print(lengthOfLastWord(s))