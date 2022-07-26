class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) this.root = newNode;

        let current = this.root;

        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                }
                current = current.left;
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                }
                current = current.right;
            }
        }

    }

    find(value) {
        if (!this.root) return false;
        let current = this.root,
            found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                console.log(current);
                return true;
            }
        }
        return false;
    }

    BFS() {
        let node = this.root;
        let data = [],
            queue = [];
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }
}

const bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(12)
bst.insert(3);

bst.BFS()

console.log(bst);

