---
title: 'BOJ-17396 - Python'
date: 2021-2-21 12:21:13
category: 'Algorithm'
draft: false
---
노드의 수와 간선의 수 n, m을 입력받는다. 그 후 노드를 지나칠 수 있는지에 대한 여부와 양방향 간선들을 입력받아 0번째 노드부터 n-1번째 노드에 도착하는 최소 시간을 출력하는 문제. 간선은 인접리스트 방식으로 저정하였으며, 지나칠 수 있는 지 여부에 따라 저장을 관리하였다. 그 후 힙을 이용한 다익스트라 방식을 사용해 풀었다. 바로 다음 간선들을 이용하여 추가하여 풀 시 시간초과 결과를 받기 때문에, 간선을 이용하기 전 현재 저장값보다 클 시 continue하여 풀었다. 덕분에 진짜 다익스트라 방식을 안 것만 같다.
```python
import sys
import heapq
INF = sys.maxsize
input = sys.stdin.readline

def dijkstra():
    q = []
    dist = [INF for _ in range(n)]
    heapq.heappush(q, [0, 0])
    dist[0] = 0

    while q:
        w, now = heapq.heappop(q)

        if w > dist[now]:
            continue

        for tw, nn in graph[now]:
            nw = w + tw
            if dist[nn] > nw:
                heapq.heappush(q, [nw, nn])
                dist[nn] = nw
    return dist[-1] if dist[-1] != INF else -1


n, m = map(int, input().split())
sight = list(map(int, input().split()))
sight[n-1] = 0
graph = {i: [] for i in range(n)}

for _ in range(m):
    s, e, w = map(int, input().split())
    if sight[s] == 1 or sight[e] == 1:
        continue
    graph[s].append([w, e])
    graph[e].append([w, s])

print(dijkstra())

```