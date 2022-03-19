---
title: 'BOJ-1967 - Python'
date: 2020-10-30 12:21:13
category: 'Algorithm'
draft: false
---
노드의 수 n과 n-1만큼의 '출발지 도착지 거리'를 입력 받는다. 이 때 노드와 노드의 거리가 최대인 일명 '트리의 지름'을 출력하는 문제. 첫번째 풀이는 힙을 사용할 때 '-가중치'하여 max 힙을 이용하여 루트 1부터 모든 노드까지의 거리를 이용할려 했으나 다시 처음부터 풀기로 하였다. 두번째 풀이는 큐를 이용하여 시작 노드부터 다른 모든 노드들까지의 최대 거리와 최대 거리를 갖는 노드를 반환하는 함수를 작성하여 위 함수를 두번 호출하여 풀었다. 자세한 풀이는 주석에 설명해 놓았다.
```python
# import sys
# import heapq
# INF = sys.maxsize

# 다익스트라를 이용하여 1번 노드부터 각 노드까지 가는 거리 중 최대 값을 반환

# def dijkstra(graph):
#     q = []
#     dist = [0 for _ in range(len(graph))]
#
#     max_val = 0
#     max_index = 0
#     heapq.heappush(q, [0, 0, 1])
#     while q:

        # 거리에 -을 붙여 max heapq으로 사용
#         reverse_weight, weight, here = heapq.heappop(q)
#         for there, next_weight in graph[here].items():
#             total_weight = next_weight + weight
#             # dist[there] = max(total_weight, dist[there])
#
#             temp_max = max(total_weight, dist[there])
#             if max_val < temp_max:
#                 max_val = temp_max
#                 max_index = there
#
#             heapq.heappush(q, [-total_weight, total_weight, there])
#     return max_index
#

# 최대 거리를 갖는 노드를 기준으로 계산하는 함수를 작성할려 했으나
# 처음부터 다시 풀기로 함

# def diameter(graph, k):
#
# n = int(input())
# graph = [{} for _ in range(n+1)]
# for _ in range(n-1):
#     u, v, w = map(int, input().split())
#     if v in graph[u]:
#         graph[u][v] = max(graph[u][v], w)
#     else:
#         graph[u][v] = w
#
# print(graph)
# print(dijkstra(graph))

# 2번쨰 풀이
import sys
from collections import deque
input = sys.stdin.readline

# {1: [[2, 3], [3, 2]], 2: [[4, 2]]}
# {시작점: [[도착지, 거리], [도착지1, 거리1]]}과 같이 그래프 저장
def dijkstra(graph, start):
    q = deque([[start, 0]]) # 시작점과 거리 0을 큐에 삼입
    visit = [False for _ in range(len(graph)+1)] # 방문 확인을 위한 리스트
    visit[start] = True # 시작점 방문 확인 처리
    max_value = 0 # 최대 값을 저장할 변수
    max_node = 0 # 최대 값을 갖는 노드를 저장할 변수
    while q:
        node, weight = q.popleft()
        if max_value < weight: # 최대값 갱신 시
            max_value = weight
            max_node = node

        for next_node in graph[node]: # next_node = [노드, 거리]
            if not visit[next_node[0]]: # 방문한 적이 없는 노드일 때
                visit[next_node[0]] = True # 방문 처리
                # 현재 보유 거리와 다음 노드까지의 거리를 합산하여 큐에 추가
                q.append([next_node[0], weight + next_node[1]])

    # 최대 값을 갖는 노드와 최대 값을 반환
    return max_node, max_value

n = int(input())
graph = {}

# 노드의 수가 1일 때 정답은 0
if n == 1:
    print(0)
    exit(0)

for _ in range(n-1):
    u, v, w = map(int, input().split())

    # 쌍방향으로 저장
    if u not in graph:
        graph[u] = [[v, w]]
    else:
        graph[u].append([v, w])
    if v not in graph:
        graph[v] = [[u, w]]
    else:
        graph[v].append([u, w])

# 루트 1부터 시작 했을 때 최대 값과 그 노드를 저장
mn, mv = dijkstra(graph, 1)
# 최대 값을 갖는 노드부터 시작하여 최대 값을 출력
print(dijkstra(graph, mn)[1])

```