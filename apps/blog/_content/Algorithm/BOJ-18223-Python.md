---
title: 'BOJ-18223 - Python'
date: 2021-3-3 12:21:13
category: 'Algorithm'
draft: false
---
V개의 정점, E개의 간선, 들려야할 정점 P가 주어진다. 1부터 V까지의 최단거리와 1부터 P를 들려 V에 도착하는 최단거리가 같을 시 "SAVE HIM"을, 다를 시 "GOOD BYE"를 출력하는 문제. 첫 번째 풀이는 플로이드 와샬 방법을 이용하여 모든 정점으로부터의 최단거리를 계산한 후, 1부터 V까지의 값과 1부터 P까지의 값 + P부터 V까지의 값을 비교하여 풀었으나 시간초과 결과를 받게 되었다. 두 번째 풀이는 INF와 heap을 사용하는 다익스트라를 구현하여 1부터의 최단거리들, P부터의 최단거리를 계산하여 위 공식을 대입해 풀었다.
```python
# import sys
# INF = sys.maxsize
# input = sys.stdin.readline
#
# def floyd(graph):
#     for k in range(1, V+1):
#         graph[k][k] = 0
#         for i in range(1, V+1):
#             for j in range(1, V+1):
#                 graph[i][j] = min(graph[i][k] + graph[k][j], graph[i][j])
#
#
# V, E, P = map(int, input().split())
# graph = [[INF for _ in range(V+1)] for _ in range(V+1)]
#
# for _ in range(E):
#     s, e, w = map(int, input().split())
#     graph[s][e] = min(graph[s][e], w)
#     graph[e][s] = min(graph[e][s], w)
#
# floyd(graph)
# print("SAVE HIME" if graph[1][V] == graph[1][P] + graph[P][V] else "GOOD BYE")


import heapq
import sys
INF = sys.maxsize
input = sys.stdin.readline


def dijkstra(start):
    dist = [INF for _ in range(V+1)]
    dist[start] = 0

    q = []
    heapq.heappush(q, [0, start])

    while q:
        w, n = heapq.heappop(q)

        if dist[n] < w:
            continue

        for nn, tw in graph[n]:
            nw = w + tw
            if dist[nn] > nw:
                dist[nn] = nw
                heapq.heappush(q, [nw, nn])

    return dist

V, E, P = map(int, input().split())
graph = {i: [] for i in range(V+1)}
for _ in range(E):
    s, e, w = map(int, input().split())
    graph[s].append([e, w])
    graph[e].append([s, w])


dist = dijkstra(1)
dist_p = dijkstra(P)
print("SAVE HIM" if dist[V] == dist[P] + dist_p[V] else "GOOD BYE")

```