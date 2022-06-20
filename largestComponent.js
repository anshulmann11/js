const largestComponent = (graph) => {
  let largest = 0;
  let visited = new Set();

  for (let node in graph) {
    let numNodes = explore(graph, node, visited);
    // console.log(numNodes);
    if (numNodes > largest) {
      largest = numNodes;
    }
  }
  console.log(largest);
  return largest;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return 0;
  let numNodes = 0;
  visited.add(String(current));

  for (let neighbor of graph[current]) {
    numNodes += 1;
    explore(graph, neighbor, visited);
  }

  return numNodes + 1;
};

const newone = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};
console.log(largestComponent(newone));
