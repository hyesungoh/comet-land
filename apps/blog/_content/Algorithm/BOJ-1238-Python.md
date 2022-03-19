---
title: 'BOJ-1238 - Python'
date: 2020-12-17 12:21:13
category: 'Algorithm'
draft: false
---
n명의 사람, 단방향으로 출발지, 도착지, 가중치를 갖는 m개의 노선, 최종 도착지 x가 주어진다. 이 때 모든 사람들이 x에 도착하여 다시 도시 n으로 가는 최단시간 중 최대 값을 출력하는 문제. 다익스트라 알고리즘을 이용하여 접근했으며 첫 풀이는 n에서 x까지, x에서 n까지 이동하는 최소비용들을 더하여 풀었으나 메모리초과 결과를 받게 되었다. 두번째 풀이는 x부터 다른 도시들까지 이동하는 모든 최단 길이를 저장 후 노선을 반대로 저장한 것을 이용해 다른 도시들부터 x까지 가는 모든 최단 길이 두개를 더해 더한 값 중 최대 값을 출력하여 풀었다.
```python
import heapq
import sys
INF = sys.maxsize
input = sys.stdin.readline

def dijkstra(start, dist, graph):
    dist[start] = 0
    q = []
    heapq.heappush(q, [0, start])

    while q:
        cnt, here = heapq.heappop(q)
        if dist[here] > cnt:
            dist[here] = cnt

        for there in range(1, n+1):
            if dist[there] > cnt + graph[here][there]:
                heapq.heappush(q, [cnt + graph[here][there], there])


n, m, x = map(int, input().split())
graph = [[INF for _ in range(n+1)] for _ in range(n+1)]
graph_r = [[INF for _ in range(n+1)] for _ in range(n+1)]

for _ in range(m):
    s, e, w = map(int, input().split())
    graph[s][e] = min(graph[s][e], w)
    graph_r[e][s] = min(graph_r[e][s], w)

dist_x = [INF for _ in range(n+1)]
dist_r = [INF for _ in range(n+1)]
dijkstra(x, dist_x, graph)
dijkstra(x, dist_r, graph_r)

ans = 0
for i in range(1, n+1):
    ans = max(ans, dist_x[i] + dist_r[i])
print(ans)

```