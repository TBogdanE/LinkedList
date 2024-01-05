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
    if (value > this.size()) {
      console.error("Index is bigger than the list size");
      return;
    }

    let currentNode = this.firstNode;

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

    if (!currentNode) {
      string += "null";
      return;
    }
    
    while (currentNode) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    string += currentNode;
    console.log("String:", string);
  }

  inserAt(value, index) {
    let currentNode = this.firstNode;
    let count = 0;

    if (index > this.size()) {
      console.error("Index is bigger than the list size");
      return;
    }

    while (count < index) {
      if (count == index - 1) {
        let nextNode = currentNode.nextNode;
        let newNode = new Node(value, nextNode);
        currentNode.nextNode = newNode;
        this.toString();
      }

      currentNode = currentNode.nextNode;
      count += 1;
    }
  }

  removeAt(index) {
    let currentNode = this.firstNode;
    let previousNode = null;
    let count = 0;
    let forwardNode = null;

    if (index >= this.size()) {
      console.error("Index is bigger than the list size");
      return;
    }

    while (count < index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      forwardNode = currentNode.nextNode;

      if (count === index - 1) {
        console.log(
          `Value ${currentNode.value} locate at index ${index} was removed`
        );
        previousNode.nextNode = forwardNode;
        this.toString();
        return;
      }

      count += 1;
    }
  }
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
list.inserAt(100, 2);
list.inserAt(179, 1);
list.removeAt(3);
