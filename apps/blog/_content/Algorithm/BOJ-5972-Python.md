---
title: 'BOJ-5972 - Python'
date: 2021-3-1 12:21:13
category: 'Algorithm'
draft: false
---
n개의 지역, 양방향에 가중치가 있는 m개의 간선이 있을 때 1번 지역부터 n번 지역까지 이동할 떄 최소의 가중치를 출력하는 문제. INF와 heap 연산을 이용하는 다익스트라 방법을 이용하여 풀었다.
```python
import heapq
import sys
INF = sys.maxsize
input = sys.stdin.readline

def dijkstra():
    dist = [INF for _ in range(n+1)]
    dist[1] = 0

    q = []
    heapq.heappush(q, [0, 1])

    while q:
        now_weight, now = heapq.heappop(q)
        for next, weight in graph[now]:
            next_weight = weight + now_weight
            if dist[next] > next_weight:
                heapq.heappush(q, [next_weight, next])
                dist[next] = next_weight

    return dist[-1]

n, m = map(int, input().split())
graph = {i: [] for i in range(n+1)}

for _ in range(m):
    s, e, w = map(int, input().split())
    graph[s].append([e, w])
    graph[e].append([s, w])

print(dijkstra())

```