---
title: 'BOJ-1854 - Python'
date: 2021-1-21 12:21:13
category: 'Algorithm'
draft: false
---
제일 빠른 경로만을 찾던 다익스트라 문제들과는 달리 k번째로 빠른 경로를 찾는 문제. 첫 번째 시도는 n개의 heap을 이용하여 정렬하며 해당 배열의 크기가 k보다 작을 때만 q에 삽입하는 형식으로 풀었으나 틀렸습니다 결과를 받게 되었다. 내가 생각하는 반례로는 다른 지점들이 k 이상이 되어야 k번째 방문 이력이 생기는 경우이다. 두 번째 풀이는 k개의 INF로 이루어진 배열이 n+1개인 2차원 배열을 이용하였다. k-1번째 수와 비교하여 비용이 작을 때 q에 삽입한 후, k-1번째 수에 삽입, 해당 배열을 정렬하여 풀었다. heap을 이용하면 더욱 빠르게 풀 수 있을 것 같으나 INF로 초기화하는 과정때문에 오히려 연산이 늘어날 것만도 같다.
```python
import heapq
import sys
INF = sys.maxsize
input = sys.stdin.readline

def solve(n, k, graph):

    q = []
    heapq.heappush(q, [0, 1])
    # k개의 INF로 이루어진 배열이 n+1개
    dists = [[INF for _ in range(k)] for _ in range(n+1)]
    dists[1][0] = 0

    while q:
        cnt, now = heapq.heappop(q)
        for np, tc in graph[now]:
            nc = tc + cnt

            # k번째 수와 비교
            if dists[np][k-1] > nc:
                heapq.heappush(q, [nc, np])
                # k번째 수에 삽입 및 정렬
                dists[np][k-1] = nc
                dists[np].sort()

    return dists

n, m, k = map(int, input().split())
graph = [[] for _ in range(n+1)]

for _ in range(m):
    s, e, w = map(int, input().split())
    graph[s].append([e, w])

dists = solve(n, k, graph)

for i in range(1, n+1):
    print(-1 if dists[i][k-1] == INF else dists[i][k-1])

```