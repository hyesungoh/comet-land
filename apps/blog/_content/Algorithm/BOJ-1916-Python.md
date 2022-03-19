---
title: 'BOJ-1916 - Python'
date: 2020-11-1 12:21:13
category: 'Algorithm'
draft: false
---
도시 n개, 버스 노선 m개를 입력 받은 후, m개의 노선들을 '출발지 도착지 비용'과 같이 입력받은 후 '출발지 도착지'를 입력받아 출발지에서 도착지까지 가는 최소비용을 출력하는 문제. 다익스트라 문제로써 그래프에 [{도착지1: 비용1}, {도착지2: 비용2, 도착지3: 비용3}]과 같이 저장하여 인덱스를 출발지로 사용하였다. 그 후 힙연산, 각 노드마다 최소 비용을 저장하는 리스트를 이용하여 풀었으나 백준상에서 메모리 초과 결과를 받게 되었다. 그래프의 아이템들을 이용하는 반복문전에 저장돼 있는 값과 비교하는 부분을 넣어 메모리 초과를 해결하여 풀었다.재채점 결과 메모리초과가 되어 동일한 방법으로 문법만 편해진 방법으로 작성하여 풀었더니 CA 결과를 다시 받았다. 4달전에 비해서 많이 성장했다고 느꼈다.
```python
# import sys
# import heapq
# input = sys.stdin.readline
# INF = sys.maxsize
#
# def dijkstra(graph, s): # 그래프와 시작점
#     q = []
#     heapq.heappush(q, [0, s]) # 리스트 q에 [가중치, 도착지]와 같은 형태로 사용
#     dist = [INF for _ in range(len(graph))] # 각 도착지까지의 최소 거리를 저장할 리스트
#
#     while q:
#         weight, here = heapq.heappop(q)
#
#         if weight > dist[here]: # 현재 가중치가 저장돼 있는 가중치보다 클 시
#             continue
#
#         for there, next_weight in graph[here].items():
#             # 그래프는 [{}, {도착지: 가중치, 도착지1: 가중치1}]과 같이 저장
#             next = weight + next_weight # 현재 가중치와 그래프에 저장된 가중치를 더함
#             dist[there] = min(dist[there], next) # 저장돼 있는 것과 비교하여 저장
#             heapq.heappush(q, [next, there]) # 리스트 q에 [다음 가중치, 다음 도착지]를 힙 연산을 통해 넣음
#     return dist
#
# n = int(input())
# m = int(input())
# graph = [{} for _ in range(n+1)]
# for _ in range(m):
#     u, v, w = map(int, input().split())
#     # 출발지, 도착지가 같을 때 더욱 작은 값을 저장
#     if v in graph[u]:
#         graph[u][v] = min(w, graph[u][v])
#     else:
#         graph[u][v] = w
#
# start, end = map(int, input().split())
# print(dijkstra(graph, start)[end])


import sys
input = sys.stdin.readline
INF = sys.maxsize
import heapq

def dijkstra(start):
    dist = [INF for _ in range(n+1)]
    dist[start] = 0
    q = []
    heapq.heappush(q, [0, start])

    while q:
        now_weight, now = heapq.heappop(q)

        if dist[now] < now_weight:
            continue

        for next, weight in graph[now]:
            next_weight = now_weight + weight
            if dist[next] > next_weight:
                heapq.heappush(q, [next_weight, next])
                dist[next] = next_weight
    return dist


n = int(input())
m = int(input())

graph = {i: [] for i in range(n+1)}
for _ in range(m):
    s, e, w = map(int, input().split())
    graph[s].append([e, w])

start, end = map(int, input().split())
dist = dijkstra(start)
print(dist[end])

```