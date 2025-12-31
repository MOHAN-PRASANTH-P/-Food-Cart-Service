export class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addEdge(a, b) {
    if (!this.adjList.has(a)) this.adjList.set(a, new Set());
    if (!this.adjList.has(b)) this.adjList.set(b, new Set());
    this.adjList.get(a).add(b);
    this.adjList.get(b).add(a);
  }

  getRecommendations(itemName) {
    itemName = itemName.toLowerCase();
    const recs = this.adjList.get(itemName);
    return recs ? Array.from(recs) : [];
  }
}