const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor() {
    this.head = null;
    this.end = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (!this.head ||  !this.end) {
      this.head = node;
      this.end = node;
      return;
    }
    this.end.next = node;
    this.end = node;
  }
  
  dequeue() {
    const delted = this.head;
    if (!this.head) {
      return null;
    }    
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.end = null;
    }
    return delted.value;
  }
}

module.exports = {
  Queue
};