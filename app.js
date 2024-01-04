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
    let currentNode = this.firstNode;
    let previousNode = null;

    while (currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    previousNode.nextNode = null;

    this.size();
  }

  contains(value) {
    let currentNode = this.firstNode;

    while (currentNode) {
      if (currentNode.value == value) {
        console.log(`True - ${value} is found inside the nodes`);
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    console.log(`False - ${value} is found inside the nodes`);
    return false;
  }

  find(value) {
    let currentNode = this.firstNode;
    let index = 0;

    while (currentNode) {
      if (currentNode.value == value) {
        console.log(`Index of value ${value} is: ${index}`);
        return;
      }
      currentNode = currentNode.nextNode;
      index += 1;
    }
    console.log(`Value ${value} doesn't exist in the nodes`);
    return;
  }

  toString() {
    let currentNode = this.firstNode;
    let string = "";

    while (currentNode) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    string += currentNode;
    console.log("String:", string);
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
list.pop();
list.contains(170);
list.contains(17);
list.find(17);
list.find(170);
list.toString();
console.log(list);
