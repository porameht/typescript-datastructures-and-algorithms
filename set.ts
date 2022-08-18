class mySet {
  // the var collection will hold the set
  private collection: string[] = [];

  // this method will check for the presence of an element abd return true or false
  public has(element: string) {
    return this.collection.indexOf(element) !== -1;
  }

  // this method will return all the values in the set
  public values() {
    return this.collection;
  }

  // this method will add ad element to the set
  public add(element: string) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  // this method will remove an element from a set
  public remove(element: string) {
    if (this.has(element)) {
      var index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  // this method will return the size of the collection
  public size() {
    return this.collection.length;
  }

  // this method will return the union of two sets
  public union(otherSet: any) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach((e) => {
      unionSet.add(e);
    });
    secondSet.forEach((e) => {
      unionSet.add(e);
    });
    return unionSet;
  }

  // this method will return the intersection of two sets as a new set
  public intersection(otherSet: any) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  }

  // this method will return the difference of two sets as a new set
  public difference(otherSet: any) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }

  // this method will test if the set is a subset of a different set

  public subset(otherSet: any) {
    var firstSet = this.values();
    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  }
}

var setA = new mySet();
var setB = new mySet();
var setC = new mySet();

setA.add("a");
setA.add("b");
setA.add("c");

setB.add("a");
setB.add("d");
setB.add("e");

setC.add("a");
setC.add("b");
setC.add("c");

console.log(setA.subset(setC)); // true
console.log(setA.union(setB)); // mySet { collection: [ 'a', 'b', 'c', 'd', 'e', 'f' ] }
console.log(setA.intersection(setB)); // mySet { collection: [ 'a' ] }
console.log(setA.difference(setB)); // mySet { collection: [ 'b', 'c' ] }
console.log(setA.values()); // [ 'a', 'b', 'c' ]
