class LinkedList {
  constructor() {
    this.head = null // 链表中第一个节点
    this.tail = null // 链表中最后一个节点
  }
  // append 追加节点 (末尾添加)
  append(value) {
    const newNode = { value: value, next: null }
    if (this.tail) {
      this.tail.next = newNode
    }
    this.tail = newNode
    if (!this.head) {
      this.head = newNode
    }
  }
  // prepend 前置节点 （头部添加）
  prepend(value) {
    const newNode = { value: value, next: this.head }
    this.head = newNode
    if (!this.tail) {
      this.tail = newNode
    }
  }
  // find 节点查询
  find(value) {
    if (!this.head) {
      return null
    }
    let curNode = this.head;
    while (curNode) {
      if (value === curNode.value) {
        return curNode
      }
      curNode = curNode.next
    }
    return null
  }
  // insertAfter 某个节点后面插入
  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue)
    if (existingNode) {
      const newNode = { value, next: existingNode.next }
      // existingNode.next.value = value
      existingNode.next = newNode
    }
  }
  // delete 删除节点
  delete(value) {
    if (!this.head) {
      return
    }
    while (this.head && this.head.value === value) {
      this.head = this.head.next
    }
    let curNode = this.head;
    while (curNode.next) {
      if (value === curNode.next.value) {
        curNode.next = curNode.next.next
      } else {
        curNode = curNode.next
      }
    }
    if (this.tail.value === value) {
      this.tail = curNode
    }
  }

  // 删除头部节点
  deleteHead() {
    if (!this.head) {
      return null
    }
    const deleteHead = this.head
    if (this.head.next) {
      this.head = this.head.next
    } else {
      // return null
      this.head = null;
      this.tail = null;
    }
    return deleteHead
  }
  // 以数组的方式输出节点
  toArray() {
    const elements = [];
    let curNode = this.head;
    while (curNode) {
      elements.push(curNode)
      curNode = curNode.next
    }
    return elements
  }
}

// const linkeList = new LinkedList()
// linkeList.append(1);
// linkeList.append('Summer');
// linkeList.append(true);
// linkeList.append(5);
// linkeList.append(true);
// linkeList.append(5);
// linkeList.append('Hello');
// linkeList.append('World');
// linkeList.prepend('第一个');
// linkeList.insertAfter('插入到第一个之后', '第一个');
// // console.log(linkeList.toArray())
// linkeList.delete(true)
// linkeList.delete('Summer');
// console.log(linkeList.toArray())
// linkeList.find(1);
// console.log(linkeList.find('Summer'))

//  自定义堆栈(数组)
// class Stack {
//   constructor() {
//     // 实例化
//     this.items = [];
//   }
//   push(value) {
//     this.items.push(value);
//   }
//   pop() {
//     return this.items.pop();
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   toArray() {
//     return this.items.slice();
//   }
// }

// const stack = new Stack();
// stack.push('关闭冰箱')
// stack.push('把大象放进冰箱')
// stack.push('先打开冰箱')
// console.log(stack.toArray())
// console.log(stack.pop())
// console.log(stack.toArray())
// console.log(stack.pop())
// console.log(stack.toArray())
// console.log(stack.pop())
// console.log(stack.toArray())

// class Stack {
//   constructor() {
//     this.list = new LinkedList()
//   }

//   push(value) {
//     this.list.prepend(value)
//   }

//   pop() {
//     return this.list.deleteHead()
//   }

//   isEmpty() {
//     return !this.list.head
//   }

//   toArray() {
//     return this.list.toArray()
//   }
// }


// const stack = new Stack();
// stack.push('关闭冰箱')
// stack.push('把大象放进冰箱')
// stack.push('先打开冰箱')
// console.log(stack.toArray())
// console.log(stack.pop())
// console.log(stack.toArray())
// console.log(stack.pop())
// console.log(stack.toArray())
// console.log(stack.pop())
// console.log(stack.toArray())


// class Queue {
//   constructor() {
//     this.items = []
//   }

//   enqueue(value) {
//     this.items.unshift(value)
//   }

//   dequeue() {
//     return this.items.pop()   
//   }

//   isEmpty() {
//     return this.items.length === 0
//   }

//   toArray() {
//     return this.items.slice()
//   }
// }

// const queue = new Queue();
// queue.enqueue('第一号')
// queue.enqueue('第二号')
// queue.enqueue('第三号')
// console.log(queue.toArray())
// console.log(queue.dequeue())
// console.log(queue.toArray())
// console.log(queue.dequeue())
// console.log(queue.toArray())
// console.log(queue.dequeue())
// console.log(queue.toArray())

class Queue {
  constructor() {
    this.list = new LinkedList();
  }
  enqueue(value) {
    this.list.append(value)
  }

  dequeue() {
    return this.list.deleteHead()
  }

  isEmpty() {
    return !this.list.head
  }

  toArray() {
    return this.list.toArray()
  }
}


const queue = new Queue();
queue.enqueue('第一号')
queue.enqueue('第二号')
queue.enqueue('第三号')
console.log(queue.toArray())
console.log(queue.dequeue())
console.log(queue.toArray())
console.log(queue.dequeue())
console.log(queue.toArray())
console.log(queue.dequeue())
console.log(queue.toArray())
