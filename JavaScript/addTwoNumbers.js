
  function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }


 let l1 = [2,4,3]
 let l2 = [5,6,4]


function addTwoNumbers(l1, l2) {
    function listNodeToList(node) {
        let result = [];
        while (node) {
            result.push(node.val);
            node = node.next;
        }
        return result;
    }
    
    function listToListNode(lst) {
        let dummy = new ListNode();
        let current = dummy;
        for (let value of lst) {
            current.next = new ListNode(value);
            current = current.next;
        }
        return dummy.next;
    }
    let arrayL1 = listNodeToList(l1);
    let arrayL2 = listNodeToList(l2);

    let num1 = arrayL1.reverse().join("");
    let num2 = arrayL2.reverse().join("");

    let sum = (BigInt(num1) + BigInt(num2)).toString();
    let arr = Array.from(sum, Number).reverse();

    return listToListNode(arr);
}

console.log(addTwoNumbers(l1, l2))