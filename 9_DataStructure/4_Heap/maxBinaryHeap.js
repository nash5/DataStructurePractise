class MaxBinaryHeap {
    constructor() {
        this.arr = [];
    }

    insert(element) {
        this.arr.push(element);
        this.bubbleUp(element)
    }

    bubbleUp(value) {
        let indx = this.arr.length - 1;

        while (indx > 0) {
            let parentIndx = Math.floor((indx - 1) / 2);
            let parent = this.arr[parentIndx];

            if (value <= parent) break;

            if (value > parent) {
                this.arr[indx] = parent;
                this.arr[parentIndx] = value
                indx = parentIndx;
            }
        }
        console.log(this.arr);
    }

    extractMax() {
        let last = this.arr.pop();
        if (this.arr.length > 0) {
            this.arr[0] = last;
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
                if (leftChildVal > currentVal) {
                    swap = leftChildIndx;
                }
            }
            if (rightChildIndx < length) {
                rightChildVal = this.arr[rightChildIndx];
                if ((swap === null && rightChildVal > element) ||
                    (swap !== null && rightChildVal > leftChildVal)
                ) {
                    swap = rightChildIndx;
                }
            }
            if (swap === null) break;
            this.arr[indx] = this.arr[swap];
            this.arr[swap] = currentVal;
            indx = swap;
        }
        console.log(this.arr);
    }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

heap.extractMax();
heap.extractMax();
heap.extractMax();