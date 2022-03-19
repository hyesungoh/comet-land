---
title: 'BOJ-1865 - Python'
date: 2020-11-10 12:21:13
category: 'Algorithm'
draft: false
---
도로는 방향이 없는 양의 가중치를 갖는 간선이며 웜홀은 방향이 있는 음의 가중치를 갖는 간선일 때, 다시 시작점으로 왔을 때 음의 값을 갖을 수 있는지, 즉 negative cycle이 존재하는 지 출력하는 문제. 첫풀이는 기존에 사용하던 다익스트라 방법을 이용하여 현재 정점이 출발 정점이며 값이 음수일 때 return, 정점의 수만큼 함수를 실행하여 풀었으나 시간초과 결과를 받게 되었다. 두번째 풀이는 정점의 수 _ (정점의 수 _ 모든 간선)을 수행하며 반복되는 정점이 마지막 정점이며 값이 갱신될 때를 확인하여 풀었다.
```python
# 1865
# import heapq
# import sys
# INF = sys.maxsize
# input = sys.stdin.readline
#
# def dijkstra(start):
#     q = []
#     heapq.heappush(q, [0, start])
#
#     dist = [INF for _ in range(n+1)]
#
#     while q:
#         weight, here = heapq.heappop(q)
#
#         if here == start and weight < 0:
#             dist[start] = -1
#             return dist
#
#         for there, w in road[here]:
#             next_weight = w + weight
#             if dist[there] > next_weight:
#                 dist[there] = next_weight
#                 heapq.heappush(q, [next_weight, there])
#
#         for there, w in worm[here]:
#             next_weight = (-1 * w) + weight
#             if dist[there] > next_weight:
#                 dist[there] = next_weight
#                 heapq.heappush(q, [next_weight, there])
#
#     return dist
#
# for _ in range(int(input())):
#     # n = 지점 수, m = 도로 수, w = 웜홀 수
#     # 도로는 쌍방향
#     # 웜홀은 방향 존재
#
#     n, m, w = map(int, input().split())
#     road = [[] for _ in range(n+1)]
#     worm = [[] for _ in range(n+1)]
#     for _ in range(m):
#         s, e, t = map(int, input().split())
#         road[s].append([e, t])
#         road[e].append([s, t])
#     for _ in range(w):
#         s, e, t = map(int, input().split())
#         worm[s].append([e, t])
#
#     for i in range(1, n+1):
#         if dijkstra(i)[i] == -1:
#             print("YES")
#             break
#         if i == n:
#             print("NO")


import sys
INF = sys.maxsize
input = sys.stdin.readline

def belman():
    dist = [INF for _ in range(n+1)]
    dist[1] = 0

    for compare_with_n in range(1, n+1):
        for here in range(1, n+1):
            for there, weight in graph[here]:
                next_weight = weight + dist[here]
                if dist[there] > next_weight:
                    dist[there] = next_weight
                    if compare_with_n == n:
                        return "YES"
    return "NO"

for _ in range(int(input())):
    n, m, w = map(int, input().split())
    graph = [[] for _ in range(n+1)]
    for _ in range(m):
        s, e, t = map(int, input().split())
        graph[s].append([e, t])
        graph[e].append([s, t])

    for _ in range(w):
        s, e, t = map(int, input().split())
        graph[s].append([e, -t])

    print(belman())

```