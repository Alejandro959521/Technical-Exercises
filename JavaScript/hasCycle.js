
let head = [3,2,0,-4]
let pos = 1

var hasCycle = (head) => {

    if (!head || !head.next) return false; // Si la lista está vacía o tiene solo un nodo, no hay ciclo

    let slow = head;  // Puntero lento (avanza 1 paso)
    let fast = head;  // Puntero rápido (avanza 2 pasos)

    while (fast && fast.next) {
        slow = slow.next;        // Avanza 1 paso
        fast = fast.next.next;   // Avanza 2 pasos
        if (slow === fast) return true; // Si se encuentran, hay ciclo
    }

    return false; // Si fast llega a null, no hay ciclo

}



console.log(hasCycle(head))