class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.firstNode = new Node();
  }

  append(value) {
    if (this.firstNode.value == null) {
      this.firstNode = new Node(value, null);
      return;
    }

    let tail = new Node(value, null);
    let current = this.firstNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = tail;
  }
  prepend(value) {
    //adds value node at start of the list
  }

  size() {
    //return total
  }

  head() {
    console.log("head:", this.firstNode.value);
  }

  tail() {
    //return the last node
  }

  atIndex(value) {
    //return the node at specific index
  }

  pop() {
    //remove the last node
  }

  contains(value) {
    //return true if passed in value is in the list
  }

  find(value) {
    //returns index of node containing the value
  }

  toString() {
    //prints the linkedlist obj as a string
  }

  inserAt(value, index) {}

  removeAt(index) {}
}

const list = new LinkedList();
list.append(2);
list.append(5);
list.head();
console.log(list);
