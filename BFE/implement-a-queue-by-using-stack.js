class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(element) { 
    // always add it to the bottom of the stack,
    // so that first in element always stays on the top of the stack
    
    // transfer all elements from stack1 to stack2 as you want to add the new element to the bottom of stack1
    for(let i=0; i<this.stack1.size(); i++){
      this.stack2.push(this.stack1.pop());
    }
    
    // now add the element to stack1
    this.stack1.push(element);
    
    // transfer back
    for(let i=0; i<this.stack2.size(); i++){
      this.stack1.push(this.stack2.pop());
    }
  }
  peek() { 
    return this.stack1.peek();
  }
  size() { 
    return this.stack1.size();
  }
  dequeue() {
    return this.stack1.pop();
  }
}