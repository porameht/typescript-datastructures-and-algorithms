/* Stacks! */

// function: push, pop, peek, length

var letters: string[] = []; // this is our stack
var word: string = "racecar";
var rword: string = "";

// put letter of word into  sstack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome");
}

// create a stack
class Stack {
  private count: number = 0;
  private storage: object = {};

  // adds a value onto the end of the stack
  public push(value: any) {
    this.storage[this.count] = value;
    this.count++;
  }

  // removes and returns the value at the end of the stack
  public pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  // size
  public size() {
    return this.count;
  }

  // returns the value at the end of the stack
  public peek() {
    return this.storage[this.count - 1];
  }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack);
console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.peek());
myStack.push("frank");
console.log(myStack.peek());
