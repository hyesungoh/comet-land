---
title: 'BOJ-1719 - Python'
date: 2021-1-28 12:21:13
category: 'Algorithm'
draft: false
---
n개의 노드, m개의 쌍방향 간선이 있을 때 최단거리로 다른 모든 노드들을 방문할 때 먼저 들리는 노드의 번호를 모든 노드에 대해서 출력하는 문제. 3중 반복문을 사용하는 플로이드 와샬 방법을 이용하여 풀었다. ik + kj 값으로 거리가 갱신될 시 첫번째로 방문하는 노드를 저장하는 배열의 값 ik를 ij에 저장하여 풀었다. 두 번째 풀이는 숏코딩으로 풀었다.
```python
import sys
INF = sys.maxsize
input = sys.stdin.readline

def solve():
    dist = graph
    route = [[i for i in range(n+1)] for _ in range(n+1)]

    for k in range(1, n+1):
        dist[k][k] = 0
        route[k][k] = "-"

        for i in range(1, n+1):
            for j in range(1, n+1):
                next = graph[i][k] + graph[k][j]
                if dist[i][j] > next:
                    dist[i][j] = next
                    route[i][j] = route[i][k]

    return route

n, m = map(int, input().split())
graph = [[INF for _ in range(n+1)] for _ in range(n+1)]

for _ in range(m):
    s, e, w = map(int, input().split())
    graph[s][e] = min(graph[s][e], w)
    graph[e][s] = min(graph[e][s], w)

for r in solve()[1:]:
    print(" ".join(map(lambda x: str(x), r[1:])))


# import sys
# INF = sys.maxsize
# r = sys.stdin.readline
#
# n, m = map(int, r().split())
# g = [[INF] * (n+1) for _ in range(n+1)]
# ro = [[i for i in range(n+1)] for _ in range(n+1)]
#
# for _ in range(m):
#     s, e, w = map(int, r().split())
#     g[s][e] = min(g[s][e], w)
#     g[e][s] = min(g[e][s], w)
#
#
# for k in range(1, n+1):
#     g[k][k] = 0
#     ro[k][k] = "-"
#     for i in range(1, n+1):
#         for j in range(1, n+1):
#             ne = g[i][k] + g[k][j]
#             if g[i][j] > ne:
#                 g[i][j] = ne
#                 ro[i][j] = ro[i][k]
#
# for s in ro[1:]:
#     print(" ".join(map(lambda x: str(x), s[1:])))

```