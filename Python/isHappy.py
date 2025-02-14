
n = 19
def isHappy(n):

    seen = set()

    def adition(n):

        arrN = list(str(n))
        cont = 0
        for x in arrN:
            cont += int(x)**2
        return cont

    while n != 1 and n not in seen:
           seen.add(n)
           n = adition(n)

    return n == 1
print(isHappy(n))    