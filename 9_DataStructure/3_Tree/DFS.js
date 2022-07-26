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

    DFSpreOrder() {
        let data = [];
        let current = this.root;

        function traverse(current) {
            data.push(current.value)
            if (current.left) traverse(current.left);
            if (current.right) traverse(current.right);
        }

        traverse(current);

        console.log(data);
        return data;
    }

    DFSpostOrder() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);

            data.push(node.value);
        }

        traverse(current);

        console.log("PRE-ORDER", data);
        return data;
    }

    DFSinOrder() {
        let data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);

        console.log("InOrder", data);
        return data;
    }
}

const bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(12)
bst.insert(3);

bst.DFSinOrder()

console.log(bst);

