
digits = [1,2,3]


def plusOne(digits):

    arr = []
    for x in digits:
        arr.append(str(x))

    num = ''.join(arr)
    num2 =  int(num) + 1
    arr2= []
    for x in str(num2):
        arr2.append(int(x))

    return arr2

print(plusOne(digits))
