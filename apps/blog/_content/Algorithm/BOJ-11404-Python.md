---
title: 'BOJ-11404 - Python'
date: 2020-11-27 12:21:13
category: 'Algorithm'
draft: false
---
n개의 정점과 m개의 간선이 있으며 간선은 가중치를 갖고 있다. 모든 정점에서 다른 정점으로 갈 때 최소 비용을 출력하는 문제. 모든 정점을 기준으로 3중 반복문을 수행하여 비교하는 플로이드 와샬 방법을 이용하여 풀었다. i부터 j까지 가는 비용과 i에서 k, k에서 j까지 가는 비용을 더한 것을 비교하는 방식으로 풀었다. 다익스트라와 플로이드 와샬은 시작점으로부터 다른 정점의 거리를 비교할 때 다익스트라, 모든 정점의 거리를 비교할 때는 플로이드 와샬을 사용한다고 한다.
```python
import sys
input = sys.stdin.readline
INF = sys.maxsize

n = int(input())
m = int(input())
dist = [[INF for _ in range(n+1)] for _ in range(n+1)]


for _ in range(m):
    s, e, w = map(int, input().split())
    dist[s][e] = min(dist[s][e], w)

for k in range(1, n+1):
    for i in range(1, n+1):
        dist[i][i] = 0
        for j in range(1, n+1):
            dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])

for i in range(1, n+1):
    for j in range(1, n+1):
        ans = dist[i][j] if dist[i][j] != INF else 0
        print(ans, end=" ")
    print()

```