const connectedComponentCount = (graph) => {
  let visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count += 1;
    }
  }
  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;
  visited.add(String(current));

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }
  return true;
};
const newone = {
  0: [1],
  1: [3, 8],
  2: [1, 5],
  3: [],
  5: [],
  8: [],
};
console.log(connectedComponentCount(newone));
