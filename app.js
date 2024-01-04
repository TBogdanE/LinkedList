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
    this.firstNode = new Node(value, this.firstNode);
  }

  size() {
    let count = 0;
    let currentNode = this.firstNode;
    while (currentNode) {
      console.log(`${count}: ${currentNode.value}`);
      count += 1;
      currentNode = currentNode.nextNode;
    }
    console.log(`Size of the linked list is: ${count}\n`);
    return count;
  }

  head() {
    console.log(`Head element:${this.firstNode.value}\n`);
  }

  tail() {
    let currentNode = this.firstNode;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    console.log(`Last node: ${currentNode.value}\n`);
  }

  atIndex(value) {
    let currentNode = this.firstNode;

    if (value > this.size()) {
      console.error("Index is bigger than the list size");
      return;
    }

    for (let i = 0; i <= value; i++) {
      currentNode = currentNode.nextNode;
    }
    console.log(`Element at index ${value}: ${currentNode.value}`);
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
list.append(17);
list.prepend(0);
list.append(90);
list.head();
list.size();
list.tail();
list.atIndex(2);
console.log(list);
