---
title: 'BOJ-11779 - Python'
date: 2021-1-21 12:21:13
category: 'Algorithm'
draft: false
---
n개의 도시, m개의 버스가 있다. 버스는 출발, 도착, 비용을 갖는다. 시작 도시와 도착 도시가 주어질 때, 최소 비용으로 이동했을 시 총 비용, 경로에 포함돼 있는 도시의 수, 경로를 방문하는 도시를 순서대로 출력하는 문제. 힙 자료구조를 이용한 다익스트라 방법을 이용하여 최소 비용을 구함과 동시에 방문지를 저장할 배열을 이용하여 초기화, 지금까지 방문했던 곳 추가, 다음 도시 추가 연산을 통해 풀었다.
```python
import heapq
import sys
INF = sys.maxsize
input = sys.stdin.readline

def solve(n, graph, S, E):
    dist = [INF for _ in range(n+1)]
    visited = [[] for _ in range(n+1)]
    q = []

    # cost, current position, visited position
    heapq.heappush(q, [0, S])
    dist[S] = 0
    visited[S] = [S]

    while q:
        cost, now = heapq.heappop(q)

        if cost > dist[now]:
            continue

        for np, tc in graph[now]:
            nc = cost + tc
            if nc < dist[np]:
                heapq.heappush(q, [nc, np])
                dist[np] = nc

                visited[np] = []
                for v in visited[now]:
                    visited[np].append(v)
                visited[np].append(np)

    return dist[E], visited[E]

n = int(input())
m = int(input())
graph = [[] for _ in range(n+1)]

for _ in range(m):
    s, e, c = map(int, input().split())
    graph[s].append([e, c])

S, E = map(int, input().split())

d, v = solve(n, graph, S, E)
print(d)
print(len(v))
print(*v)

```