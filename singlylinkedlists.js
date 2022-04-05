/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
 class ListNode{
    constructor(data){
      this.data = data;
      this.next = null;
    }  
  }
  
  /**
   * SLL(Singly Linked List) 
   * keeps track of the start (head) of the list and to store all the
   * functionality (methods) that each list should have.
   */
  class SLL{
    constructor(){
      this.head = null;
    }
  
    /**
     * Determines if this list is empty.
     * @returns {boolean}
     */
    isEmpty(){ // this.head
      if(this.head === null){
        return true;
      }
      return false;
    }
  
    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */  
  
    // nextNode (5)
  
  // sll1
  // head
  // (5) -> (6) -> (7) -> null
  //                r  -> nextNode
    
    insertAtBack(data){
      let nextNode = new ListNode(data);
  
      if (this.isEmpty()) {
        console.log("This is an empty list");
        this.head = nextNode;
      }
      else {
  
        let runner = this.head;
        while (runner.next !== null) {
          runner = runner.next;
        }
  
        // inserts it at the back of the list
        runner.next = nextNode;
      }
      
    }
    // good job! I think you got it already. 
    // remember to test out the method at the end
    // using sll2.insertAtBack(10)
    // after that, see what you should do if there is no node inside the list
  
    /** BONUS: 
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(vals) {
      //one solution that's somewhat slow
      // for (let i = 0; i < vals.length; i++) {
      //   this.insertAtBack(vals[i]);
      // }
  
      //repetitive code but a little faster
      for (let i = 0; i < vals.length; i++) {
        let nextNode = new ListNode(vals[i]);
        
          
        //How to find the last node of a Singly Linked List
        let runner = this.head;
        while (runner.next !== null) {
          runner = runner.next;
        }
  
        // inserts it at the back of the list
        runner.next = nextNode;
      }
    }
  
    //given
    printList(){
      if(!this.head){
          console.log("Empty list");
          return
      }
      var runner = this.head;
      while(runner){ // while(runner != null)
          console.log(runner.data);
          runner = runner.next;            
      }
    }
  }
  
  
  var node1 = new ListNode(5);
  var node2 = new ListNode(6);
  var node3 = new ListNode(7);
  node1.next = node2
  node2.next = node3
  
  
  
  // var sll1 = new SLL(); // EMPTY LIST
  // sll1.printList();
  
  
  
  var sll2 = new SLL(); 
  sll2.head= node1;
  // HEAD
  // (5) -> (6) -> (7) -> NULL
  
  // sll2.printList();
  
  // sll2.insertAtBack(10);
  sll2.printList();
  sll2.insertAtBackMany([1,2,3]);
  sll2.printList();
  
  
  
  
  
  