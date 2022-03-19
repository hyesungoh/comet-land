---
title: 'BOJ-18352 - Python'
date: 2021-2-15 12:21:13
category: 'Algorithm'
draft: false
---
n개의 도시에 단방향이며 거리가 1인 m개의 도로가 있다. x 도시부터 출발하여 최단거리가 k인 도시들을 출력하는 문제. 힙과 INF를 이용하는 다익스트라 방법을 이용하여 풀었으며 입력되는 도로들을 인접리스트 형식으로 사용하였다. x로부터 모든 도시들의 이동 거리를 배열에 저장 후 filter을 사용하여 거리가 k인 도시들을 저장 후 출력하여 풀었다.
```python
import heapq
import sys
input = sys.stdin.readline
INF = sys.maxsize

def dijkstra():
    dist = [INF for _ in range(n+1)]
    dist[x] = 0

    q = []
    heapq.heappush(q, [0, x])
    while q:
        cnt, now = heapq.heappop(q)
        for nn, nd in graph[now]:
            nextd = nd + cnt
            if dist[nn] > nextd:
                heapq.heappush(q, [nextd, nn])
                dist[nn] = nextd
    return dist

n, m, k, x = map(int, input().split())
graph = {i: [] for i in range(1, n+1)}

for _ in range(m):
    s, e = map(int, input().split())
    graph[s].append([e, 1])

dist = dijkstra()
ans = list(filter(lambda i: dist[i] == k, range(1, n+1)))
[print(i) for i in ans] if len(ans) else print(-1)

```