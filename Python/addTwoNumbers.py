
l1 = [9,9,9,9,9,9,9] 
l2 = [9,9,9,9]

def addTwoNumbers(l1,l2):
    # def listNode_to_list(node):
    #         result = []
    #         while node:
    #             result.append(node.val)
    #             node = node.next
    #         return result
    # def list_to_listNode(lst):
    #         dummy = ListNode()
    #         current = dummy
    #         for value in lst:
    #             current.next = ListNode(value)
    #             current = current.next
    #         return dummy.next

    #     array_l1 = listNode_to_list(l1)
    #     array_l2 = listNode_to_list(l2)
    num1 = ""
    num2 = ""
    for x in l1[::-1]:
        num1 += str(x)
    for x in l2[::-1]:
        num2 += str(x)
    sum = str(int(num1) + int(num2))
    arr = []
    for x in sum:
        arr.append(int(x))

    return arr[::-1]

print(addTwoNumbers(l1,l2))    