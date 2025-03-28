
head = [1,1,2,3,3]
def deleteDuplicates(head):

    arr = []
    for x in head:
        if x in arr: continue
        else: arr.append(x)

    return arr

print(deleteDuplicates(head))    