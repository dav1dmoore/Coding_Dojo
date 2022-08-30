class QueueNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty() {
        return (this.size == 0) ? true : false;
    }
  
    enqueue(value) { 
        let newNode = new QueueNode(value);
        if (this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;
        return this.size;
    }
  
    dequeue() {
        if (this.isEmpty()){
            return null;
        } 
        let oldHead = this.head;
        this.head = this.head.next;            
        if (this.size == 1){
            this.tail = null;
        } 
        this.size -= 1;
        return oldHead;
    }
  
    front() { 
        return this.head.data;
    }
  
    contains(searchValue) { 
        let runner = this.head;
        while(runner && runner.data != searchValue){
            runner = runner.next;
        }
        return runner ? true : false;
    }
  
    seed(values) {
        for(let i in values){
            this.enqueue(values[i]);
        } 
    }

      /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
   compareQueues(q2) {
    let runner1 = this.head;
    let runner2 = q2.head;
    if(this.size != q2.size){
        return false;
    }
    if(!runner1 ^ !runner2){
        return false;
    }
    while(runner1 && runner2){
        if(runner1.data != runner2.data){
            return false;
        }
        runner1 = runner1.next;
        runner2 = runner2.next;
    }
    return true;
   }

   /**
    * Determines if the queue is a palindrome (same items forward and backwards).
    * Avoid indexing queue items directly via bracket notation, instead use the
    * queue methods for practice.
    * Use only 1 stack as additional storage, no other arrays or objects.
    * The queue should be returned to its original order when done.
    * - Time: O(?).
    * - Space: O(?).
    * @returns {boolean}
    */
   isPalindrome() {}
 
   /**
    * Find the intersection in between 2 queues
    * If there is no intersection return a null value
    * If the is an intersection return the node where the queues intersect
    * - Time: O(?).
    * - Space: O(?).
    * @param {Queue} q2 The queue to be compared against this queue to find intersection.
    * @returns {QueueNode} Null in case of no intersection
    */
   findIntersection(q2) {}
   
  }
let newQueue = new Queue;
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
console.log(newQueue);
newQueue.front();
console.log(newQueue.front());
console.log(newQueue);

let q2 = new Queue;
q2.enqueue(1);
q2.enqueue(2);
q2.enqueue(3);
console.log(q2);

console.log(newQueue.compareQueues(q2));