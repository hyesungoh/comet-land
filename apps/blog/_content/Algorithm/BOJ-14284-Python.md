---
title: 'BOJ-14284 - Python'
date: 2021-4-16 12:21:13
category: 'Algorithm'
draft: false
---
정점 N개, 두 노드, 가중치를 갖는 무방향 간선 M개가 있을 때, S부터 E까지 도달하는 최소 가중치를 출력하는 전형적인 다익스트라 문제. heap을 사용한 다익스트라를 이용하여 풀었다.
```python

import sys
import heapq
INF = sys.maxsize
input = sys.stdin.readline

def dijkstra():
    dist = [INF for _ in range(N+1)]
    dist[S] = 0

    q = []
    heapq.heappush(q, [0, S])

    while q:
        w, n = heapq.heappop(q)

        if dist[n] < w:
            continue

        for nn, nw in graph[n]:
            tnw = nw + w
            if dist[nn] > tnw:
                dist[nn] = tnw
                heapq.heappush(q, [tnw, nn])

    return dist


N, M = map(int, input().split())
graph = {i: [] for i in range(1, N+1)}

for _ in range(M):
    s, e, w = map(int, input().split())
    graph[s].append([e, w])
    graph[e].append([s, w])

S, E = map(int, input().split())
dist = dijkstra()
print(dist[E])
```