function dijkstra(graph,source){
    const n=graph.length;
    const distances=Array(n).fill(Infinity);
    const visited=Array(n).fill(false);
    distances[source]=0;

    for(let i=0;i<graph.length;i++){
        let minDistance=Infinity;
        let minIndex=-1;

        for(let j=0;j<n;j++){
            if(!visited[j] && distances[j]<minDistance){
                minDistance=distances[j];
                minIndex=j;
            }
        }
        visited[minIndex]=true;

        for(const [neighbor,weight] of graph[minIndex]){
            if(!visited[neighbor] && distances[minIndex]+ weight <distances[neighbor]){
                distances[neighbor]=distances[minIndex]+weight;
            }
        }
    }
    return distances;
}

const graph=[[[1,4],[2,1]],[[3,1]],[[1,2],[3,5]],[]];
const source=0;
console.log(dijkstra(graph,source));