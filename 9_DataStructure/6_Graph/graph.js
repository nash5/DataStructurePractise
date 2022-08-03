class Graph {
    constructor() {
        this.adjacencList = {};
    }

    addVertex(value) {
        if (!this.adjacencList[value]) this.adjacencList[value] = [];
    }

    addEdge(v1, v2) {
        this.adjacencList[v1].push(v2);
        this.adjacencList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        this.adjacencList[v1] = this.adjacencList[v1].filter(e => e !== v2);
        this.adjacencList[v2] = this.adjacencList[v2].filter(e => e !== v1);
    }

    removeVertex(v) {
        while (this.adjacencList[v].length) {
            let adjacencyVertex = this.adjacencList[v].pop();
            this.removeEdge(adjacencyVertex, v);
        }
        delete this.adjacencList[v];
    }
}

let g = new Graph();
g.addVertex("bangalore");
g.addVertex("mysore");

g.addEdge("bangalore", "mysore");

g.removeEdge("bangalore", "mysore");

g.removeVertex("mysore");

console.log(g);

