const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.base = null;
  }
  root() {
    //throw new NotImplementedError('Not implemented');
    if (this.base === null) {
      return null;
    } else {
      return this.base;
    }
  }

  add(/* data */) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove() {
   throw new NotImplementedError('Not implemented');
  // this.base = this.removeNode(this.base, data);
  }

  min() {
    throw new NotImplementedError('Not implemented');
   
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};