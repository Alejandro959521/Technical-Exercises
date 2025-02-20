
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Función para unir dos listas enlazadas
function mergeTwoLists(list1, list2) {
    // Nodo ficticio para facilitar la construcción de la lista resultante
    let dummy = new ListNode();
    let current = dummy; // Puntero para construir la nueva lista

    // Recorre ambas listas
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Si alguna de las listas aún tiene elementos, añádelos al final
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Retorna la lista resultante (omitiendo el nodo ficticio)
    return dummy.next;
}