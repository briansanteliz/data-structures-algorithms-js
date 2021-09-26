/* 
    Linked list Big O operations:
    4. Remove in the fist node -> O(1)
    1. Insert in the last node -> O(1)
    2. Insert in the first node -> O(1)
    3. Remove in the last node -> O(n) -> In array is de the best O(1) 
    5. Insert in the middle -> O(n)
    5. Reomve in the middle -> O(n)
    5. Search by index -> O(n) ->   In array is de the best O(1)
*/


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class linkedList{
    constructor(value){
        const newNode =  new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
}
const node1 = new Node(30);
console.log(node1)