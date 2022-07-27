class PriorityQueue {
    constructor() {
        this.arr = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.arr.push(newNode);
        this.bubbleUp(newNode);
    }

    bubbleUp(node) {
        let indx = this.arr.length - 1;

        while (indx > 0) {
            let parentIndx = Math.floor((indx - 1) / 2);
            let parent = this.arr[parentIndx];

            if (node.priority >= parent.priority) break;

            this.arr[parentIndx] = node;
            this.arr[indx] = parent;
            indx = parentIndx;

        }
        console.log(this.arr);
    }

    dequeue() {
        let end = this.arr.pop();

        if (this.arr.length > 0) {
            this.arr[0] = end;
            this.sinkDown();
        }
        return this.arr;
    }

    sinkDown() {
        let indx = 0;
        let currentVal = this.arr[0];
        let length = this.arr.length;

        while (true) {
            let leftChildIndx = 2 * indx + 1;
            let rightChildIndx = 2 * indx + 2;
            let leftChildVal, rightChildVal;
            let swap = null;

            if (leftChildIndx < length) {
                leftChildVal = this.arr[leftChildIndx];
                if (leftChildVal.priority < currentVal.priority) {
                    swap = leftChildIndx
                }
            }
            if (rightChildIndx < length) {
                rightChildVal = this.arr[rightChildIndx];
                if (
                    (swap === null && rightChildVal.priority < currentVal.priority) ||
                    (swap !== null && rightChildVal.priority < leftChildVal.priority)
                ) {
                    swap = rightChildVal;
                }
            }

            if (swap === null) break;
            this.arr[indx] = this.arr[swap];
            this.arr[swap] = currentVal
            indx = swap;
        }
    }

}

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

let RTO = new PriorityQueue();

RTO.enqueue("Chief Minister", 3);
RTO.enqueue("MLA", 4);
RTO.enqueue("Counsiler", 5);
RTO.enqueue("Home minister", 2);
RTO.enqueue("Human", 1);


RTO.dequeue()
RTO.dequeue()
RTO.dequeue()
RTO.dequeue()
RTO.dequeue()

