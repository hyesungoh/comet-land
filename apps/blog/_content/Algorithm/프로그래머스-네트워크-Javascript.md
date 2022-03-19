---
title: '프로그래머스-네트워크 - Javascript'
date: 2022-1-19 12:21:13
category: 'Algorithm'
draft: false
---
컴퓨터의 수와 컴퓨터들이 연결되어 있는 지 여부를 나타내는 배열이 주어질 때 연결된 그룹 (네트워크)기 몇 개인지 반환하는 문제. 방문했던 컴퓨터들을 확인하기 위한 isVisit 배열을 만들어 관리하였으며, 전체 네트워크의 수를 확인해야하기 때문에 n까지 반복문을 돌고 방문하지 않은 컴퓨터들에 대해 bfs 연산을 통해 방문처리를 하여 풀었다.
```javascript
function solution(n, computers) {
  let network = 0;
  const isVisit = Array(n).fill(false);
  const queue = [];

  for (let index = 0; index < n; index++) {
    if (isVisit[index]) continue;
    
    network += 1;
    queue.push(index);

    while (queue.length) {
      const currentNode = queue.shift();
      if (isVisit[currentNode]) continue;
      isVisit[currentNode] = true;

      for (let nextComputer in computers[currentNode]) {
        if (isVisit[nextComputer]) continue;
        if (computers[currentNode][nextComputer] === 0) continue;

        queue.push(nextComputer);
      }
    }
  }
  return network;
}

```