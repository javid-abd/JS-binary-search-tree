'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    addNode(value) {
        // create a new node
        const node = new Node(value);

        // check if there are any nodes
        if (!this.root) {
            // if it's null, then assign node to the root of the tree
            this.root = node;
        } else {
            // create search node function with the currentNode value
            const searchNode = currentNode => {
                // if it's smaller, then it goes to the left
                if (value < currentNode.value) {
                    // if left doesn't exits
                    if (!currentNode.left) {
                        // create left
                        currentNode.left = node;
                        // do NOT forget to return, because value found its place, you're done!
                        return;
                    } else {
                        // if there's value, then update currentNode
                        return searchNode(currentNode.left);
                    };
                } else {
                    // if it's larger, then it goes to the right
                    if (value > currentNode.value) {
                        // if right doesn't exist
                        if (!currentNode.right) {
                            // create right
                            currentNode.right = node;
                            // rememeber you're done!
                            return;
                        } else {
                            // if again there's value, then update currentNode cycle
                            return searchNode(currentNode.right);
                        };
                    };
                };
            }

            // Use searchNode funtion to place your node in the tree
            return searchNode(this.root);
        };

    };


    // this is optional and good for debugging as nicely outputting the result on the console
    toString() {
        return JSON.stringify(this.root);
    }
}

// Finally let's create our tree
const tree = new BinarySearchTree();
tree.addNode(2);
tree.addNode(5);
tree.addNode(11);
tree.addNode(7);
tree.addNode(88);
tree.addNode(69);

// consolelog to see what you've created
console.log(tree.toString())