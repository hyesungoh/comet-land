---
title: 'BOJ-1504 - Python'
date: 2020-11-5 12:21:13
category: 'Algorithm'
draft: false
---
정점의 개수 n, 간선의 개수 e를 입력받은 후 e의 개수만큼 "출발지 도착지 가중치"를 입력받는다. 그 후 정점의 두개 v1, v2를 입력받은 후 정점 1부터 n까지 v1, v2를 반드시 통과한 최단거리를 출력하는 문제. 첫 접근은 deque의 appendleft를 이용하여 다음 방문지가 v1 혹은 v2일 때 우선순위를 높이는 방식이였으나 실패하게 되었다. 접근을 바꾸어 시작, v1, v2에서 출발하는 최단거리 리스트를 저장하고 s > v1 > v2 > n과 s > v2 > v1 > n을 계산 및 비교하여 출력하여 풀었다. 간선을 저장할 때 유무를 찾아 추가하는 방식에서 런타임 에러가 일어나, 수정하여 풀었다.
```python
# import heapq
# import sys
# input = sys.stdin.readline
# INF = sys.maxsize
#
# def dijkstra(start):
#     dist = [INF for _ in range(n+1)]
#     dist[start] = 0
#     q = []
#     heapq.heappush(q, [0, start])
#     while q:
#         weight, here = heapq.heappop(q)
#
#         for there, w in graph[here]:
#             next_weight = weight + w
#             if dist[there] > next_weight:
#                 dist[there] = next_weight
#                 heapq.heappush(q, [next_weight, there])
#     return dist
#
#
# n, e = map(int, input().split())
# graph = {}
#
# for _ in range(e):
#     u, v, w = map(int, input().split())
#     if u not in graph:
#         graph[u] = [[v, w]]
#     else:
#         graph[u].append([v, w])
#     if v not in graph:
#         graph[v] = [[u, w]]
#     else:
#         graph[v].append([u, w])
#
# v1, v2 = map(int, input().split())
# s = dijkstra(1)
# s_v1 = dijkstra(v1)
# s_v2 = dijkstra(v2)
#
# ans = min(s[v1] + s_v1[v2] + s_v2[n],
#           s[v2] + s_v2[v1] + s_v1[n])
# print(ans if ans < INF else -1)

import heapq
import sys
input = sys.stdin.readline
INF = sys.maxsize

def dijkstra(start):
    dist = [INF for _ in range(n+1)]
    dist[start] = 0
    q = []
    heapq.heappush(q, [0, start])
    while q:
        weight, here = heapq.heappop(q)

        for there, w in graph[here]:
            next_weight = weight + w
            if dist[there] > next_weight:
                dist[there] = next_weight
                heapq.heappush(q, [next_weight, there])
    return dist


n, e = map(int, input().split())
graph = [[] for _ in range(n+1)]

for _ in range(e):
    u, v, w = map(int, input().split())
    graph[u].append([v, w])
    graph[v].append([u, w])

v1, v2 = map(int, input().split())
s = dijkstra(1)
s_v1 = dijkstra(v1)
s_v2 = dijkstra(v2)

 # s > v1 > v2 > n과 s > v2 > v1 > n 을 비교
ans = min(s[v1] + s_v1[v2] + s_v2[n],
          s[v2] + s_v2[v1] + s_v1[n])
print(ans if ans < INF else -1)

```