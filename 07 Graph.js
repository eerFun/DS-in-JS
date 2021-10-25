// suppose the graph is bidirectional and not-weighted
class Graph {
    constructor() {
      // Space Complexity is O(|v|+|E|)
      this.adjacencyList = {};
    }
  
    // O(1)
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
        return true;
      }
      return false;
    }
  
    // O(1)
    addEdge(vertex1, vertex2) {
      if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        return true;
      }
      return false;
    }
    
    // O(|E|)
    removeEdge(vertex1, vertex2) {
      if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
        return true;
      }
      return false;
    }
    
    // O(|V|+|E|)
    removeVertex(vertex) {
      if (!this.adjacencyList[vertex]) return undefined;
      while (this.adjacencyList[vertex].length) {
        const temp = this.adjacencyList[vertex].pop();
        this.adjacencyList[temp] = this.adjacencyList[temp].filter(v => v !== vertex);
      }
      delete this.adjacencyList[vertex];
      return this;
    }
  }
  
  const myGraph = new Graph()
  myGraph.addVertex('A');
  myGraph.addVertex('B');
  myGraph.addVertex('C');
  myGraph.addVertex('D');
  myGraph.addEdge('A', 'B');
  myGraph.addEdge('A', 'C');
  myGraph.addEdge('A', 'D');
  myGraph.addEdge('B', 'D');
  myGraph.addEdge('C', 'D');
  console.log(myGraph)
  