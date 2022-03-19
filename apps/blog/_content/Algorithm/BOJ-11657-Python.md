---
title: 'BOJ-11657 - Python'
date: 2020-11-12 12:21:13
category: 'Algorithm'
draft: false
---
n, m 각각 정점, 간선의 수를 입력받은 후에 m만큼 s, e, w, 시작점, 도착점, 가중치를 입력받으며 가중치는 음수가 입력될 수도 있다. 시작점은 1이며 다른 정점까지 도착하는 최소 가중치를 출력하되, 네거티브 사이클이 있을 때는 -1을, 도착하지 못하는 정점은 -1을 출력하는 문제. 첫풀이는 벨만포드 알고리즘을 이용하여 모든 간선을 수행한 거리 값을 저장한 후 다시 모든 간선을 수행할 때 값의 차이가 보일 때 네거티브 사이클이 있다 판명하도록 풀었으나 틀렸습니다 결과를 받게되어 [BOJ 1865](../master/python/BOJ_1865.py)와 같이 3중 반복문을 수행하여 풀었다. i가 마지막 정점인 것만 확인 시에 1과 이어져있지 않은 정점이지만 네거티브 사이클이 있는 예외 경우가 존재하여 최대 간선의 수와 가중치의 최대 값을 곱한 값보다 작으며 계속해서 줄어들 경우만 예외처리하여 풀었다.
```python
# import sys
# INF = sys.maxsize
# input = sys.stdin.readline
#
# def relax():
#     for start in range(n+1):
#         for end, weight in graph[start]:
#             next_weight = dist[start] + weight
#             if dist[end] > next_weight:
#                 dist[end] = next_weight
#     return dist
#
# def bellman():
#     for start in range(n+1):
#         for end, weight in graph[start]:
#             next_weight = dist[start] + weight
#             if dist[end] > next_weight:
#                 return False
#     return True
#
# n, m = map(int, input().split())
# graph = [[] for _ in range(n+1)]
# dist = [INF for _ in range(n+1)]
# dist[1] = 0
#
# for _ in range(m):
#     s, e, w = map(int, input().split())
#     graph[s].append([e, w])
#
# short = relax()
#
# if bellman():
#     for i in range(2, n+1):
#         print(short[i] if short[i] != INF else -1)
# else:
#     print(-1)

import sys
INF = sys.maxsize
input = sys.stdin.readline

def bellman():
    for i in range(1, n+1):
        for start in range(1, n+1):
            for end, weight in graph[start]:
                next_weight = weight + dist[start]
                if dist[end] > next_weight:
                    if i == n and next_weight < 60000001:
                        print(-1)
                        sys.exit(0)
                    dist[end] = next_weight

n, m = map(int, input().rstrip().split())
graph = [[] for _ in range(n+1)]
dist = [INF for _ in range(n+1)]
dist[1] = 0

for _ in range(m):
    s, e, w = map(int, input().rstrip().split())
    graph[s].append([e, w])

bellman()

for i in dist[2:]:
    print(i if i < 60000001 else -1)
```