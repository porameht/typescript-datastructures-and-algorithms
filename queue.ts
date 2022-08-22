export class Queue {
  private collection: string[] = [];

  public print = () => console.log(this.collection);

  public enqueue = (element: string) => this.collection.push(element);

  public dequeue = () => {
    return this.collection.shift();
  };

  public front = () => {
    return this.collection[0];
  };
  public size = () => {
    return this.collection.length;
  };

  public isEmpty = () => {
    return this.collection.length === 0;
  };
}

// var q = new Queue();
// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// q.enqueue("d");
// q.print();
// q.dequeue();
// console.log(q.front());
// q.print();

class PriorityQueue {
  private collection: any[] = [];

  public printCollection = () => console.log(this.collection);

  public enqueue = (element: any[]) => {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      var added: boolean = false;
      for (var i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  };

  public dequeue = () => {
    var value: any = this.collection.shift();
    return value[0];
  };

  public front = () => {
    return this.collection[0];
  };

  public size = () => {
    return this.collection.length;
  };

  public isEmpty = () => {
    return this.collection.length === 0;
  };
}

var pq = new PriorityQueue();
pq.enqueue(["d", 4]);
pq.enqueue(["d", 4]);
pq.enqueue(["a", 1]);
pq.enqueue(["b", 2]);
pq.enqueue(["c", 3]);

pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();
