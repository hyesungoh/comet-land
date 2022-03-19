---
title: 'BOJ-14938 - Python'
date: 2021-2-9 12:21:13
category: 'Algorithm'
draft: false
---
n개의 도시, m의 수색 범위, r개의 길이 있다. 각 도시에 ni개의 아이템이 있을 때 수색 범위가 넘지 않는 선에서 아이템을 찾을 수 있는 최대 수를 출력하는 문제. 첫 풀이는 입력받는 길들을 인접 리스트 형식으로, 존재하지 않는 길은 INF로 입력을 받은 후 플로이드 와샬 방법을 이용하여 수색범위가 넘지 않았을 때 추가하는 방법으로 풀었으나 틀렸습니다 결과를 받게 되었다. 아마 추가적인 연산이 있지 않았을 까 의심된다. 두 번째 풀이는 인접 행렬을 이용한 다익스트라를 이용하여 풀었으며 수색 범위가 넘지 않았을 때 힙에 추가, 방문 확인 배열을 이용해 방문하지 않았던 도시들의 아이템만 연산하였다. 다익스트라 연산을 n번하여 찾은 최대값을 출력하여 풀었다.
```python
# import sys
# INF = sys.maxsize
# input = sys.stdin.readline
#
# def floyd():
#     get = [items[i] for i in range(n+1)]
#
#     for k in range(1, n+1):
#         for i in range(1, n+1):
#             if graph[i][k] <= m:
#                 get[i] += items[k]
#
#             for j in range(1, n+1):
#                 if graph[i][k] + graph[k][j] <= m:
#                     get[i] += items[j]
#
#     return max(get)
#
# n, m, r = map(int, input().split())
# items = [0] + list(map(int, input().split()))
# graph = [[INF for _ in range(n+1)] for _ in range(n+1)]
#
# for _ in range(r):
#     s, e, w = map(int, input().split())
#     graph[s][e] = min(graph[s][e], w)
#     graph[e][s] = min(graph[e][s], w)
#
# ans = floyd()
# print(ans)

import heapq
import sys
INF = sys.maxsize
input = sys.stdin.readline

def dijkstra(start):
    q = []
    heapq.heappush(q, [0, start])
    visit = [False for _ in range(n+1)]
    visit[start] = True
    item = items[start]

    while q:
        weight, node = heapq.heappop(q)

        for nn, nw in graph[node]:
            next_weight = weight + nw
            if next_weight <= m:
                heapq.heappush(q, [next_weight, nn])

                if not visit[nn]:
                    visit[nn] = True
                    item += items[nn]

    return item

n, m, r = map(int, input().split())
items = [0] + list(map(int, input().split()))
graph = {i: [] for  i in range(1, n+1)}

for _ in range(r):
    s, e, w = map(int, input().split())
    graph[s].append([e, w])
    graph[e].append([s, w])

ans = 0
for i in range(1, n+1):
    ans = max(ans, dijkstra(i))
print(ans)

```