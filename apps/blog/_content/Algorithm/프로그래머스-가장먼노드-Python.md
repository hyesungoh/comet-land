---
title: '프로그래머스-가장먼노드 - Python'
date: 2021-3-12 12:21:13
category: 'Algorithm'
draft: false
---
n개의 노드가 있는 그래프가 있다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 반환하는 문제. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미한다. INF와 heap을 이용하는 다익스트라 방법을 이용하여 풀었다. 인접리스트 방식으로 그래프를 저장한 후 다익스트라 연산을 통해 최단 거리를 저장, 최단 거리 중 최장 길이를 갖는 노드들을 센 후 반환하여 풀었다.
```python
import sys
INF = sys.maxsize
import heapq

def solution(n, vertex):
    def dijkstra():
        q = []
        heapq.heappush(q, [0, 1])

        while q:
            ndist, nnode = heapq.heappop(q)

            if dist[nnode] < ndist:
                continue

            nextDist = ndist + 1
            for nextNode in graph[nnode]:
                if dist[nextNode] > nextDist:
                    dist[nextNode] = nextDist
                    heapq.heappush(q, [nextDist, nextNode])


    graph = {i: [] for i in range(n+1)}
    dist = [INF for _ in range(n+1)]
    dist[1] = 0

    for s, e in vertex:
        graph[s].append(e)
        graph[e].append(s)

    dijkstra()
    max_num, cnt = 0, 1
    for i in range(1, n+1):
        if max_num < dist[i]:
            max_num = dist[i]
            cnt = 1
        elif max_num == dist[i]:
            cnt += 1

    return cnt

```