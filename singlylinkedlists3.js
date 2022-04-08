// class Node 
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// class SLL - Singly Linked List
class SLL {
    constructor() {
        this.head = null;
    }

    insertAtBack(data) {
        var newNode = new ListNode(data);
        if (this.head) {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        } else {
            this.head = newNode;
        }
    }
    //given
    printList() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(data) {
        var runner = this.head;

        while (runner) {
            if (runner.data === data) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    /**
     * Removes the last node of this list.
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        // need a way to check 2nd to last node and remove the .next
        // of that node
        if (this.head) {
            var returnNode = new ListNode();
            var runner = this.head;
            if (runner.next) {
                returnNode = runner.next;
            }
            while (returnNode.next) {
                returnNode = returnNode.next;
                runner = runner.next;
            }
            runner.next = null;
            return returnNode;
        }
    }

    // EXTRA
    /**
     * Calculates the average of this list.
     * @returns {number|NaN} The average of the node's data.
     */
    average() {
        let count = 0;
        let sum = 0
        var runner = this.head;
        while (runner) {
            count++;
            sum += runner.data;
            runner = runner.next;
        }
        return sum / count;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?ListNode} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(data, curr = this.head) {
        if (curr.data === data) {
            return true;
        } else if (curr === null) {
            return false;
        }

        return this.containsRecursive(data, curr.next);

    }


    /** HERE IS AN EXTRA ONE. This is a pretty fun one. You are given a list but the list may have a loop (none of the nodes has a next to null, how can you find out there is a loop? The thinking process is fun. You can just do some pseudo code for it)
     * Determines whether the list has a loop in it which would result in
     * infinitely traversing unless otherwise avoided. A loop is when a node's
     * next points to a node that is behind it.
     * @returns {boolean} Whether the list has a loop or not.
     */
    hasLoop() {
        // would it be possible to store the head, while we loop
        // through with runner.next and running runner.next == (<variable we stored head in>) to determine if we are back at the head or not
        // i think we'd want to just do object comparison rather than the data comparison in case there are repeating data values
        let start = this.head;
        let runner = this.head;

        while (runner) {
            if (start == runner.next) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
}



var list1 = new SLL();

var list2 = new SLL();
list2.insertAtBack(1);
list2.insertAtBack(2);
list2.insertAtBack(3);
//       HEAD
// list2: (1) --> (2) --> (3) --> null


list1.printList();
list2.printList();

console.log(list2.contains(3))
console.log(list2.containsRecursive(3))
// expected result: true
console.log(list2.contains(1000))
// expected result: false
console.log(list2.average());

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node2;
loopList = new SLL();
loopList.head = node1;
loopList.head.next = node1;

console.log(loopList.hasLoop());
