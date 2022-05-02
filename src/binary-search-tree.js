const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }
  root() {
    //throw new NotImplementedError('Not implemented');
    if (this.tree === null) {
      return null;
    } else {
      return this.tree;
    }
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    if (!data) return
    this.tree = addWithin(this.tree, data)
    function addWithin(node, data) {
      if (!node) return new Node(data)
        if (node.data === data) return node
           if (node.data > data) {
          node.left = addWithin(node.left, data)
               } else {
         node.right = addWithin(node.right, data)
        }
      return node
    }
  }

  has(data ) {
    //throw new NotImplementedError('Not implemented');
           return search(this.tree, data)
    function search(node, data) {
      if (!node) return false
               if (node.data === data) return true
                  return data < node.data ?
                     search(node.left, data) :
        search(node.right, data)
    }
  }

  find(data ) {
    //throw new NotImplementedError('Not implemented');
    let cur = this.tree
           while (cur.data !== data) {
    if (data < cur.data) {
        cur = cur.left
         } else {
        cur = cur.right
       }
         if (cur === null) return null
    }
    return cur
  }

  remove() {
   throw new NotImplementedError('Not implemented');
  // this.tree = this.removeNode(this.tree, data);
  }

  min() {
   // throw new NotImplementedError('Not implemented');
  if (!this.tree) return
   let node = this.tree
      while (node.left) {
           node = node.left
           }
   return node.data
  }

  max() {
   // throw new NotImplementedError('Not implemented');
   if (!this.tree) return
         let node = this.tree
            while (node.right) {
                 node = node.right
                }
   return node.data
 }
}

module.exports = {
  BinarySearchTree
};
